import { Mutations } from '~/store'

export default ({ app, store }) => {
  // Every time the route changes (fired on initialization too)
  if (!process.client) return
  app.router.afterEach((to, from) => {
    //do something to validate
    store.commit(Mutations.TYPE.SET_MODAL, {
      isOpen: false,
      name: '',
      data: undefined
    })
  })
}
