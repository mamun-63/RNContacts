import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import RegisterService from './service'

export const register = createAsyncThunk('auth/register', RegisterService.register)

const initialState = {
  isLoggedIn: false,
  status: null,
  user: null,
  error: null
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    resetUser: (state, action) => {
      state.user = action.payload
      state.error = action.payload
    },
  },
  extraReducers: {
    // register
    [register.pending]: (state, action) => {
      state.status = "loading";
    },
    [register.fulfilled]: (state, action) => {
      console.log(action)
      state.status = "success";
      state.user = action.payload
     },
    [register.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload ? action.payload : 'Something went wrong, try again.'
    },
  },
})

export const { setIsLoggedIn, resetUser } = slice.actions

export default slice.reducer
