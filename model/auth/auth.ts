export interface LoginRequestDTO {
  email: string
  password: string
}

export interface loginResponseDTO {
  accessToken: string
  refreshToken: string
}
