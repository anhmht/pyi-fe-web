export interface LoginRequestDTO {
  email: string
  password: string
}

export interface loginResponseDTO {
  accessToken: string
  refreshToken: string
}

export interface User {
  user_id: string
  username: string
  email: string
  role: string
  address: string
}
