import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  location: null,
}

export const authSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload
    },
  },
})

export const { setLocation } = authSlice.actions

export default authSlice.reducer
