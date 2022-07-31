// users.service.ts
import { AxiosResponse } from 'axios'
import http from './Http'
import { IUser } from './Model'

export const fetchUsers = async (): Promise<AxiosResponse<IUser[]>> => {
  return http.get<IUser[]>('/users')
}

export const updateUser = async (
  user: IUser
): Promise<AxiosResponse<IUser>> => {
  return http.put<IUser>(`/users/${user.id}`, user)
}

export const deleteUser = async (
  user: IUser
): Promise<AxiosResponse<IUser>> => {
  return http.delete<IUser>(`/users/${user.id}`)
}
