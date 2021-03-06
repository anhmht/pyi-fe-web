import { Middleware } from '@nuxt/types'
import { RootState } from '~/store/index'

const requireAuth: Middleware = ({ app, route, redirect }) => {
  if (process.client) {
    if ((app.store?.state as RootState).currentUser) return

    redirect('/signin-signup#sign-in')
  }
}

export default requireAuth
