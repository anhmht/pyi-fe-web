
import { Plugin } from "@nuxt/types";
import { authService, AuthService } from "~/services/auth.service";


declare module 'vue/types/vue' {
  interface Vue {
    $authService: AuthService
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $authService: AuthService
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $authService: AuthService
  }
}

const apiClient: Plugin = (context, inject) => {
  inject('authService', authService(context))
}
export default apiClient
