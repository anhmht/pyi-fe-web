import { refreshToken } from '~/constant/auth'
import { Mutations } from '~/store'

export default function (
  { $axios, redirect, store, error: nuxtError, i18n },
  inject
) {
  const auth = $axios.create({
    baseURL: process.env.BASE_AUTH_URL
  })
  const api = $axios.create({
    baseURL: process.env.BASE_URL
  })

  if (process.client) {
    const token = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')
    if (token) {
      api.setToken(token, 'Bearer')
    }
    if (user) {
      store.commit(Mutations.TYPE.SET_CURRENT_USER, JSON.parse(user))
    }
    if (i18n.locale && i18n.locale !== 'en') {
      api.setHeader('lang', i18n.locale)
    }
    const currency = localStorage.getItem('currency')
    if (currency && currency !== 'usd') {
      api.setHeader('currency', currency)
    }
  }

  api.onError(async (error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/error/not-permitted')
    } else if (code === 406) {
      try {
        if (process.client) {
          const authData = await auth.post(refreshToken, {
            refreshToken: localStorage.getItem('refreshToken')
          })
          console.log(authData)
          localStorage.setItem('accessToken', authData.data.accessToken)
          localStorage.setItem('refreshToken', authData.data.refreshToken)
          api.setToken(authData.accessToken, 'Bearer')
          window.location.reload()
        } else {
          redirect('/signin-signup')
        }
      } catch (error) {
        redirect('/signin-signup')
      }
    } else if (code >= 500) {
      redirect('/error/internal-error')
    } else {
      return Promise.reject(
        nuxtError({
          statusCode: code,
          message: error.response && error.response.data.message
        })
      )
    }
  })

  auth.onError(async (error) => {
    const code = parseInt(error.response && error.response.status)
    if (code >= 500) {
      redirect('/error/internal-error')
    }
  })

  inject('auth', auth)
  inject('api', api)
}
