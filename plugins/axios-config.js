import uri from '~/constant/index'

export default function ({ $axios, redirect }, inject) {
  const auth = $axios.create({
    baseURL: process.env.BASE_AUTH_URL
  })
  const api = $axios.create({
    baseURL: process.env.BASE_URL
  })

  if (process.client) {
    const token = localStorage.getItem('access_token')
    if (token) {
      api.setToken(token, 'Bearer')
    }
  }

  api.onError(async (error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/not-permitted')
    } else if (code === 406) {
      try {
        if (process.client) {
          const authData = await auth.post(uri.REFRESH_TOKEN, {
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
    } else {
      redirect('/internal-error')
    }
  })

  auth.onError(async (error) => {
    const code = parseInt(error.response && error.response.status)
    if (code >= 500) {
      redirect('/internal-error')
    }
  })

  inject('auth', auth)
  inject('api', api)
}
