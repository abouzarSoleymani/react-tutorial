import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../api/types'

interface IUserState {
  userInfo: IUser | null
  isLoggedIn: boolean
  loading: boolean
  rules: string[]
}
export const userInfo = () => {
  const user = localStorage.getItem('userInfo')
  return user ? JSON.parse(user) : null
}

const initialState: IUserState = {
  userInfo: userInfo() ? userInfo() : null,
  isLoggedIn: false,
  loading: false,
  rules: ['user'],
}

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: (state) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    },
    login: (state, action: PayloadAction<IUser>) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
      state.isLoggedIn = true
    },
  },
})

export default userSlice.reducer

export const { logout, login } = userSlice.actions
