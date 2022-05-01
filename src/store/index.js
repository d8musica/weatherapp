import citiesReducer from './slices/citiesReducer';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: citiesReducer,
  })

export default store;