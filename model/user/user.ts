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

}


export interface ResetPassRequestDTO {
  new_password: string
  secret: string
}

export interface ActivateAccountDTO {
  email: string
  secret: string
}
