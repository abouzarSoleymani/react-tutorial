export interface IBaseUser {
  name: string
  username: string
  email: string
}
export interface IUser extends IBaseUser {
  id: number | null
}
