import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../api/types'

interface IUserState {
  user: IUser | null
}

const initialState: IUserState = {
  user: null,
}

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
  },
})

export default userSlice.reducer

export const { logout, login } = userSlice.actions
