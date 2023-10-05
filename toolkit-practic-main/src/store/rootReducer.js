import { combineReducers } from '@reduxjs/toolkit'
import { toDoReducer } from './ToDoSlice'


export const rootReducer = combineReducers({
  todos: toDoReducer
})