import React, { useState } from 'react'
import { ToDoList } from './components/ToDoList'
import { InputField } from './components/InputField'
import { useDispatch } from 'react-redux'
import { addToDo } from './store/ToDoSlice'

function App() {
  const [ text, setText ] = useState('')
  const dispatch = useDispatch()
  
  const addTask = () => {
    dispatch(addToDo({ text }))
    setText('')
  }

  return (
    <div className="App">
      <InputField addButton={ addTask } text={ text } setText={ setText }/>
      <ToDoList/>
    </div>
  )
}

export default App
