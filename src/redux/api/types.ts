export interface IUser {
  username: string
  password: string
  role?: string
}

export interface IGenericResponse {
  status: string
  message: string
}
