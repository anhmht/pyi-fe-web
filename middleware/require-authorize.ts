import { Middleware } from '@nuxt/types'
import { RootState } from '~/store/index'

const requireAuthorize: Middleware = ({ app, route, redirect }) => {
  if (process.client) {
    const user = (app.store?.state as RootState).currentUser
    if (user && user.role === 'admin') return
    redirect('/error/not-permitted')
  }
}

export default requireAuthorize
