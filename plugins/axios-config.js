import { REFRESH_TOKEN } from '~/constant/auth'
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
    const token = localStorage.getItem('access_token')
    const user = localStorage.getItem('user')
    if (token) {
      api.setToken(token, 'Bearer')
    }
    if (user) {
      store.commit(Mutations.TYPE.SET_CURRENT_USER, JSON.parse(user))
    }
    if (i18n.locale) {
      api.setHeader('lang', i18n.locale)
    }
    const currency = localStorage.getItem('currency')
    if (currency) {
      api.setHeader('currency', currency)
    }
  }

  api.onError(async (error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/not-permitted')
    } else if (code === 406) {
      try {
        if (process.client) {
          const authData = await auth.post(REFRESH_TOKEN, {
            refresh_token: localStorage.getItem('refresh_token')
          })
          localStorage.setItem('access_token', authData.access_token)
          localStorage.setItem('refresh_token', authData.refresh_token)
          api.setToken(authData.access_token, 'Bearer')
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
