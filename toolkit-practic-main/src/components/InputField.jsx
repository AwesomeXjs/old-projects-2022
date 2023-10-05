import React from 'react'

export const InputField = ( { text, setText, addButton } ) => {
  return (
    <label htmlFor="input">
      <input
        name={ 'input' }
        value={ text }
        onChange={ e => setText( e.target.value ) }
        type="text"/>
      <button onClick={ addButton }>Add ToDo</button>
    </label>
  )
}


