import Vue from 'vue'
import { MutationTree } from 'vuex'
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
    SET_CURRENT_USER: 'setCurrentUser',
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

} as MutationTree<RootState>
