import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IUser } from '../types/types'

const UserItemPage = () => {
	const [user, setUser] = useState<IUser | null>(null)
	const params = useParams<any>()
	const nabigate = useNavigate()
	const goBack = () => nabigate(-1)

	useEffect(() => {
		fetchUser()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	async function fetchUser() {
		try {
			const response = await axios.get<IUser>(
				`https://jsonplaceholder.typicode.com/users/${params.id}`
			)
			setUser(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div>
			<button onClick={goBack}>Back</button>
			<h1>Страница пользователя {user?.name}</h1>
			<div>{user?.email}</div>
			<div>{user?.address.city}</div>
		</div>
	)
}

export default UserItemPage
