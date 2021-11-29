import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from './service'
import { usePersistor } from '../utils'

export const register = createAsyncThunk('auth/register', AuthService.register)
export const login = createAsyncThunk('auth/login', AuthService.login)

const name = 'auth';

const initialState = {
  isLoggedIn: false,
  status: null,
  error: null,
  user: null,
}

const persistedFields = ['user']

export const slice = createSlice({
  name,
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
      state.status = "success";
      state.user = action.payload
     },
    [register.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload ? action.payload : 'Something went wrong, try again.'
    },

    // login
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload
      state.isLoggedIn = true
     },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload 
    },
  },
})

export const { setIsLoggedIn, resetUser } = slice.actions

export default usePersistor({
  reducer: slice.reducer,
  name,
  whitelist: persistedFields
})
