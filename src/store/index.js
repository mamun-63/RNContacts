import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import authReducer from './auth/slice'
import contactsReducer from './contacts/slice'

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);

export default store;
