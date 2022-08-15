import { Cart } from "~/model/cart/cart"
import { Modal } from "~/model/common/common"
import { Category, Collection, Color, Size } from "~/model/product/product"
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
  sizes: Size[]
  modal: Modal
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
  collections: [],
  sizes: [],
  modal: {
    isOpen: false,
    name: ''
  }
})
