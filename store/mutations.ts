import { cloneDeep } from 'lodash'
import Vue from 'vue'
import { MutationTree } from 'vuex'
import { Cart } from '~/model/cart/cart'
import { Category, Collection, Color, Size } from '~/model/product/product'
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
    SET_CATEGORIES: 'setCategories',

    //COLOR
    SET_COLORS: 'setColors',

    //COLLECTION
    SET_COLLECTIONS: 'setCollections',

    //SIZE
    SET_SIZES: 'setSizes',
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
    if (!process.client) return
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
    if (!process.client) return
    state.shoppingCart = state.shoppingCart.filter(c => c.id !== payload.id)
    localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
  },
  [Mutations.TYPE.UPDATE_CART]: (state: RootState, payload: Cart): void => {
    if (!process.client) return
    const index = state.shoppingCart.findIndex(c => c.id === payload.id)
    if (index > -1) {
      Vue.set(state.shoppingCart, index, cloneDeep(payload))
      localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
    }
  },
  [Mutations.TYPE.SET_SHOPPING_CART]: (state: RootState, payload: Cart[]): void => {
    if (!process.client) return
    state.shoppingCart = cloneDeep(payload)
    localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
  },

  // ---------------------------------------------------------------------------
  // CATEGORY
  [Mutations.TYPE.SET_CATEGORIES]: (state: RootState, payload: Category[]): void => {
    state.categories = cloneDeep(payload)
  },

  // ---------------------------------------------------------------------------
  // COLOR
  [Mutations.TYPE.SET_COLORS]: (state: RootState, payload: Color[]): void => {
    state.colors = cloneDeep(payload)
  },

  // ---------------------------------------------------------------------------
  // COLLECTION
  [Mutations.TYPE.SET_COLLECTIONS]: (state: RootState, payload: Collection[]): void => {
    state.collections = cloneDeep(payload)
  },

  // ---------------------------------------------------------------------------
  // SIZE
  [Mutations.TYPE.SET_SIZES]: (state: RootState, payload: Size[]): void => {
    state.sizes = cloneDeep(payload)
  }

} as MutationTree<RootState>
