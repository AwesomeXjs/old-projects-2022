import React from 'react'
import style from './Counter.module.css'

const Counter = ({ count, value, changeTextInput, increment, decrement }) => {
	return (
		<div className={style.container}>
			<h1>{count}</h1>
			{value ? <h1>{value}</h1> : <h1>Текста нет</h1>}
			<input
				placeholder='Имя пользователя...'
				className={style.input}
				type='text'
				value={value}
				onChange={changeTextInput}
			/>
			<button
				className={`${style.button} ${style.increment}`}
				onClick={increment}
			>
				increment
			</button>
			<button
				className={`${style.button} ${style.decrement}`}
				onClick={decrement}
			>
				decrement
			</button>
		</div>
	)
}

export default Counter
