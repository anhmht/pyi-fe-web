import { Context } from "@nuxt/types";
import { LOGIN } from "~/constant/auth";
import { LoginRequestDTO, loginResponseDTO } from "~/model/auth/auth";

const signIn = async ({ app }: Context, payload: LoginRequestDTO): Promise<loginResponseDTO> => {
  try {
    const data = await app.$auth.post(LOGIN, payload)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}


export interface AuthService {
  signIn: (payload: LoginRequestDTO) => Promise<loginResponseDTO>
}

export const authService = (context: Context) => {
  return {
    signIn: (payload: LoginRequestDTO) => signIn(context, payload),
  }
}
