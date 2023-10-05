import React, { useState } from 'react'
import '../App.css'
import Counter from './Counter'

const CounterBLL = () => {
	const [count, setCount] = useState(0)
	const [value, setValue] = useState('')

	const increment = () => {
		setCount(prev => prev + 1)
	}
	const decrement = () => {
		setCount(prev => prev - 1)
	}
	const changeTextInput = e => {
		setValue(e.target.value)
	}
	return (
		<>
			<Counter
				count={count}
				value={value}
				increment={increment}
				decrement={decrement}
				changeTextInput={changeTextInput}
			/>
		</>
	)
}

export default CounterBLL
