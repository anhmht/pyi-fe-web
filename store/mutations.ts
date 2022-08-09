import { cloneDeep } from 'lodash'
import Vue from 'vue'
import { MutationTree } from 'vuex'
import { Cart } from '~/model/cart/cart'
import { Category } from '~/model/product/product'
import { User } from '~/model/user/user'
import { RootState } from './state'

// -----------------------------------------------------------------------------
//
//  Constants
//
// -----------------------------------------------------------------------------

export namespace Mutations {
  // ---------------------------------------------------------------------------
  //
  //  Mutation Types
  //
  // ---------------------------------------------------------------------------

  export const TYPE = {
    // USER
    SET_CURRENT_USER: 'setCurrentUser',

    // CART
    ADD_TO_CART: 'addToCart',
    REMOVE_FROM_CART: 'removeFromCart',
    UPDATE_CART: 'updateCart',
    SET_SHOPPING_CART: 'setShoppingCart',

    // CATEGORY
    SET_CATEGORIES: 'setCategories'
  } as const

  // ---------------------------------------------------------------------------
  //
  //  Mutation Payloads
  //
  // ---------------------------------------------------------------------------

  export namespace Payload {

  }
}

// -----------------------------------------------------------------------------
//
//  Mutation Implements
//
// -----------------------------------------------------------------------------

export default {
  [Mutations.TYPE.SET_CURRENT_USER]: (
    state: RootState,
    payload: User
  ): void => {
    state.currentUser = payload
  },

  // ---------------------------------------------------------------------------
  // CART
  [Mutations.TYPE.ADD_TO_CART]: (
    state: RootState,
    payload: Cart): void => {
    const product = state.shoppingCart.find(c => c.product.id === payload.product.id
      && c.colorId === payload.colorId && c.sizeId === payload.sizeId)
    if (product) {
      product.quantity += payload.quantity
    } else {
      state.shoppingCart.push(payload)
    }
    localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
  },
  [Mutations.TYPE.REMOVE_FROM_CART]: (state: RootState,
    payload: Cart): void => {
    state.shoppingCart = state.shoppingCart.filter(c => c.id !== payload.id)
    localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
  },
  [Mutations.TYPE.UPDATE_CART]: (state: RootState, payload: Cart): void => {
    const index = state.shoppingCart.findIndex(c => c.id === payload.id)
    if (index > -1) {
      Vue.set(state.shoppingCart, index, cloneDeep(payload))
      localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
    }
  },
  [Mutations.TYPE.SET_SHOPPING_CART]: (state: RootState, payload: Cart[]): void => {
    state.shoppingCart = cloneDeep(payload)
    localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
  },

  // ---------------------------------------------------------------------------
  // CATEGORY
  [Mutations.TYPE.SET_CATEGORIES]: (state: RootState, payload: Category[]): void => {
    state.categories = cloneDeep(payload)
  }

} as MutationTree<RootState>
