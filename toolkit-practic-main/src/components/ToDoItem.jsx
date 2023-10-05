import React from 'react'
import { useDispatch } from 'react-redux'
import { removeToDo, toggleCheck } from '../store/ToDoSlice'

export const ToDoItem = ({ todo, id }) => {
  const dispatch = useDispatch()
  const toggleCheckbox = () => dispatch(toggleCheck({ id }))
  const deleteTask = () => dispatch(removeToDo({ id }))
   
  return (
    <li>
      <input
        onChange={ toggleCheckbox }
        type="checkbox"
        checked={ todo.completed }/>
      <span>{ todo.text }</span>
      <span
        onClick={ deleteTask }
        style={ { color: 'red' } }>&times;</span>
    </li>
  )
}


