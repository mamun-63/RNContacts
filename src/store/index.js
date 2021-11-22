import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/slice'
import contactsReducer from './contacts/slice'

export const store = configureStore({
  // pull that navigation (reducer) slice and connect to store
  reducer: {
    auth: authReducer,
    contacts: contactsReducer
  },
})
