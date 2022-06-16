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
      api.setHeader.setToken(token, 'Bearer')
    }
  }

  api.onError(async (error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/not-authorize')
    } else if (code === 406) {
      try {
        if (process.client) {
          const authData = await auth.post(uri.REFRESH_TOKEN, {
            refresh_token: localStorage.getItem('refresh_token')
          })
          localStorage.setItem('access_token', authData.access_token)
          localStorage.setItem('refresh_token', authData.refresh_token)
          api.setHeader.setToken(authData.access_token, 'Bearer')
        } else {
          redirect('/login')
        }
      } catch (error) {
        redirect('/login')
      }
    } else {
      redirect('/error')
    }
  })

  auth.onError(async (error) => {
    const code = parseInt(error.response && error.response.status)
    if (code >= 500) {
      redirect('/error')
    } else {
      redirect('/')
    }
  })

  inject('auth', auth)
  inject('api', api)
}
