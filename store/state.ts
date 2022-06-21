import { User } from "~/model/user/user"

// -----------------------------------------------------------------------------
//
//  (Root)State Type
//
// -----------------------------------------------------------------------------

export interface RootState {
  currentUser: User | null | undefined

}

// -----------------------------------------------------------------------------
//
//  (Root)State Instance
//
// -----------------------------------------------------------------------------

export default (): RootState => ({
  currentUser: undefined,

})