import { Context } from "@nuxt/types";
import { FORGOT_PASS, REGISTER, RESET_PASS } from "~/constant/user";
import { RegisterRequestDTO, RegisterResponse, ResetPassRequestDTO } from "~/model/user/user";


const register = async ({ app }: Context, payload: RegisterRequestDTO): Promise<RegisterResponse> => {
  try {
    const data = await app.$api.post(REGISTER, payload)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

const forgotPass = async ({ app }: Context, email: string): Promise<any> => {
  try {
    const data = await app.$api.post(FORGOT_PASS, { email })
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

const resetPass = async ({ app }: Context, payload: ResetPassRequestDTO): Promise<any> => {
  try {
    const data = await app.$api.post(RESET_PASS, payload)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export interface UserService {
  register: (payload: RegisterRequestDTO) => Promise<RegisterResponse>
  forgotPass: (email: string) => Promise<any>
  resetPass: (payload: ResetPassRequestDTO) => Promise<any>
}

export const userService = (context: Context): UserService => {
  return {
    register: (payload: RegisterRequestDTO) => register(context, payload),
    forgotPass: (email: string) => forgotPass(context, email),
    resetPass: (payload: ResetPassRequestDTO) => resetPass(context, payload)
  }
}
