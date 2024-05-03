import { configureStore } from '@reduxjs/toolkit'
import SearchsSlice from './SearchSlice'

export const store = configureStore({
  reducer: {
    SearchItems: SearchsSlice,
  },
})