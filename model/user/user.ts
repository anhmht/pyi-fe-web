export interface User {
  user_id: string
  username: string
  email: string
  role: string
  address: string
}

export interface RegisterRequestDTO {
  email: string
  username: string
  password: string
}

export interface RegisterResponse {
  address: string
  email: string
  isActive: boolean
  role: string
  id: string
  username: string
}


export interface ResetPassRequestDTO {
  password: string
  secret: string
}

export interface ActivateAccountDTO {
  email: string
  secret: string
}
