import { Context } from "@nuxt/types";
import { LOGIN } from "~/constant/auth";
import { LoginRequestDTO, loginResponseDTO } from "~/model/auth/auth";
import { Mutations } from "~/store";

const signIn = async ({ app }: Context, payload: LoginRequestDTO): Promise<loginResponseDTO> => {
  try {
    const data = await app.$auth.post(LOGIN, payload)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

const signOut = ({ store, app }: Context) => {
  if (!process.client) return
  localStorage.removeItem('user')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  store.commit(Mutations.TYPE.SET_CURRENT_USER, undefined)
  app.$api.setToken(false)
}
export interface AuthService {
  signIn: (payload: LoginRequestDTO) => Promise<loginResponseDTO>
  signOut: () => void
}

export const authService = (context: Context): AuthService => {
  return {
    signIn: (payload: LoginRequestDTO) => signIn(context, payload),
    signOut: () => signOut(context)
  }
}
