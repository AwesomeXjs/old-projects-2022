import { configureStore } from '@reduxjs/toolkit'
import { mainPageReducer } from './reducers/mainPage'

export const store = configureStore({
	reducer: mainPageReducer,
})
