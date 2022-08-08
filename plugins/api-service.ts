
import { Plugin } from "@nuxt/types";
import { authService, AuthService } from "~/services/auth.service";
import { categoryService, CategoryService } from "~/services/category.service";
import { userService, UserService } from "~/services/user.service";


declare module 'vue/types/vue' {
  interface Vue {
    $authService: AuthService
    $userService: UserService
    $categoryService: CategoryService
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $authService: AuthService
    $userService: UserService
    $categoryService: CategoryService
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $authService: AuthService
    $userService: UserService
    $categoryService: CategoryService
  }
}

const apiClient: Plugin = (context, inject) => {
  inject('authService', authService(context))
  inject('userService', userService(context))
  inject('categoryService', categoryService(context))

}
export default apiClient
