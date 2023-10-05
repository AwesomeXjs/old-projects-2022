import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IToDo } from '../types/types'
import List from './List'
import ToDoItem from './ToDoItem'

const ToDoPage: FC = () => {
	const [toDos, setToDos] = useState<IToDo[]>([])

	useEffect(() => {
		fetchToDos()
	}, [])
	async function fetchToDos() {
		try {
			const response = await axios.get<IToDo[]>(
				'https://jsonplaceholder.typicode.com/todos?_limit=10'
			)
			setToDos(response.data)
		} catch (error) {
			alert(error)
		}
	}
	return (
		<List
			items={toDos}
			renderItem={(todo: IToDo) => <ToDoItem todo={todo} key={todo.id} />}
		/>
	)
}

export default ToDoPage
