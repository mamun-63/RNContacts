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

// Action creators are generated for each case reducer function
export const { setLocation } = authSlice.actions

// Selectors (to select the mutated state from the component)
export const selectLocation = (state) => state.contacts.location

export default authSlice.reducer
