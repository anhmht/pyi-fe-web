import { Cart } from "~/model/cart/cart"
import { User } from "~/model/user/user"

// -----------------------------------------------------------------------------
//
//  (Root)State Type
//
// -----------------------------------------------------------------------------

export interface RootState {
  currentUser: User | null | undefined
  shoppingCart: Cart[]
}

// -----------------------------------------------------------------------------
//
//  (Root)State Instance
//
// -----------------------------------------------------------------------------

export default (): RootState => ({
  currentUser: undefined,
  shoppingCart: []
})
