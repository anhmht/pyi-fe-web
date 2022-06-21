
import { Plugin } from "@nuxt/types";
import { authService, AuthService } from "~/services/auth.service";
import { userService, UserService } from "~/services/user.service";


declare module 'vue/types/vue' {
  interface Vue {
    $authService: AuthService
    $userService: UserService
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $authService: AuthService
    $userService: UserService
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $authService: AuthService
    $userService: UserService
  }
}

const apiClient: Plugin = (context, inject) => {
  inject('authService', authService(context))
  inject('userService', userService(context))

}
export default apiClient
