import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/slices'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})