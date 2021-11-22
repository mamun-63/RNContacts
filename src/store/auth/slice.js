import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsLoggedIn } = authSlice.actions

// Selectors (to select the mutated state from the component)
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn

export default authSlice.reducer
