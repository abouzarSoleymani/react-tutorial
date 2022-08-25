import axiosClient from './axiosClient'
import http from './Http'
import { IUser } from './types'

// export const userLoginService = (user: any) => {
//   return axiosClient.post('login', user)
// }

export const userLoginService = async (user: IUser): Promise<any> => {
  return http.post<IUser>(`/login`, user)
}
