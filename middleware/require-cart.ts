import { Middleware } from '@nuxt/types'
import { RootState } from '~/store/index'

const requireAuth: Middleware = ({ app, route, redirect }) => {
  if (process.client) {
    const cart = (app.store?.state as RootState).shoppingCart.filter(cart => cart.isSelected)

    if (cart.length) return

    redirect('/cart')
  }
}

export default requireAuth
