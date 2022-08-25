import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../api/types'
import { userLoginService } from '../api/user.service'

export const userLogin = createAsyncThunk(
  'user/login',
  async (user: IUser, { rejectWithValue }) => {
    try {
      const data = await userLoginService(user)
      // store user's token in local storage
      localStorage.setItem('accessToken', JSON.stringify(data.data))

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
