import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../api/types'
import { userLoginService } from '../api/user.service'
import { login } from './user-slice'

export const userLogin = createAsyncThunk(
  'user/login',
  async (user: IUser, { rejectWithValue, dispatch }) => {
    try {
      const data = await userLoginService(user)
      data.data.role = 'user'
      dispatch(login(data.data))
      return data
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }
      return rejectWithValue(error.message)
    }
  }
)
