import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  location: null,
}

export const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload
    },
  },
})

export const { setLocation } = slice.actions

export default slice.reducer
