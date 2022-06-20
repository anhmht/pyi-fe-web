import { Context } from "@nuxt/types";
import { REGISTER } from "~/constant/user";
import { RegisterRequestDTO, RegisterResponse } from "~/model/user/user";


const register = async ({ app }: Context, payload: RegisterRequestDTO): Promise<RegisterResponse> => {
  try {
    const data = await app.$api.post(REGISTER, payload)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export interface UserService {
  register: (payload: RegisterRequestDTO) => Promise<RegisterResponse>
}

export const userService = (context: Context): UserService => {
  return {
    register: (payload: RegisterRequestDTO) => register(context, payload),
  }
}
