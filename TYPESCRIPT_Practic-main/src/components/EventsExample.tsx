import React, { FC, useRef, useState } from 'react'

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('')
	const [isDrag, setIsDrag] = useState<boolean>(false)

	const firstRef = useRef<HTMLInputElement>(null)

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value)

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(value)
		console.log(firstRef.current?.value)
	}

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('Drag')
	}
	const dragWothPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(true)
	}

	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
	}
	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
		console.log('DROP')
	}

	return (
		<div>
			<input
				value={value}
				onChange={changeHandler}
				type='text'
				placeholder='Управляемый'
			/>
			<input
				placeholder='Не Управляемый'
				ref={firstRef}
				value={value}
				onChange={changeHandler}
				type='text'
			/>
			<button onClick={clickHandler}>Click</button>
			<div
				onDrag={dragHandler}
				draggable
				style={{ width: 200, height: 200, background: 'red' }}
			></div>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWothPreventHandler}
				style={{
					width: 200,
					height: 200,
					background: isDrag ? 'blue' : 'red',
					marginTop: 20,
				}}
			></div>
		</div>
	)
}

export default EventsExample
