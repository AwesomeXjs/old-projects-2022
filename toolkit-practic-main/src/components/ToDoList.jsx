import React from 'react'
import { ToDoItem } from './ToDoItem'
import { useSelector } from 'react-redux'

export const ToDoList = () => {
  const toDos = useSelector(state => state.todos.todos)
  return (
    <ul>
      {
        toDos.map(todo => <ToDoItem id={ todo.id } key={ todo.id } todo={ todo }
        />)
      }
    </ul>
  )
}


