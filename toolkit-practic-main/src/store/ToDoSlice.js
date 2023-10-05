import { createSlice } from '@reduxjs/toolkit'

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: { todos: [] },
  reducers: {
    addToDo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false
      })
    },
    removeToDo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleCheck(state, action) {
      const toggledEl = state.todos.find(todo => todo.id === action.payload.id)
      toggledEl.completed = !toggledEl.completed
    }
  }
})

export const { addToDo, removeToDo, toggleCheck } = toDoSlice.actions
export const toDoReducer = toDoSlice.reducer