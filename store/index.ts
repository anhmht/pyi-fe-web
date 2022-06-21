// interface の export チェイニングが型チェックで warning になるため（ts-loader 不具合）
// https://github.com/webpack/webpack/issues/7378
import { RootState as State } from '~/store/state'
export type RootState = State

export { Getters } from '~/store/getters'
export { Mutations } from '~/store/mutations'
export { Actions } from '~/store/actions'
