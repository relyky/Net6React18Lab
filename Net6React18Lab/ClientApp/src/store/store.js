import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'views/ReduxCounter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
