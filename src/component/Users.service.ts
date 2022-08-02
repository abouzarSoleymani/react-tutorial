// users.service.ts
import http from './Http'
import { IUser } from './Model'

export const fetchUsers = async (): Promise<IUser[]> => {
  return http.get<IUser[]>('/users')
}

export const updateUser = async (user: IUser): Promise<IUser> => {
  return http.put<IUser>(`/users/${user.id}`, user)
}

export const deleteUser = async (user: IUser): Promise<IUser> => {
  return http.delete<IUser>(`/users/${user.id}`)
}
