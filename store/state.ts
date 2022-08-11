import { Cart } from "~/model/cart/cart"
import { Category, Collection, Color } from "~/model/product/product"
import { User } from "~/model/user/user"

// -----------------------------------------------------------------------------
//
//  (Root)State Type
//
// -----------------------------------------------------------------------------

export interface RootState {
  currentUser: User | null | undefined
  shoppingCart: Cart[]
  categories: Category[]
  colors: Color[]
  collections: Collection[]
}

// -----------------------------------------------------------------------------
//
//  (Root)State Instance
//
// -----------------------------------------------------------------------------

export default (): RootState => ({
  currentUser: undefined,
  shoppingCart: [],
  categories: [],
  colors: [],
  collections: []
})
