import React from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { useAuth } from '../customHooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { signIn } = useAuth()

	const fromPage = location.state?.from?.pathname || '/'

	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const user = form.username.value
		signIn(user, () => navigate(fromPage, { replace: true }))
	}
	return (
		<div>
			<h1>Страница для логина</h1>
			<form onSubmit={handleSubmit}>
				<MyInput name='username' type='text' placeholder='Введите логин' />
				<MyInput type='password' placeholder='Введите пароль' />
				<MyButton type='submit'>Войти</MyButton>
			</form>
		</div>
	)
}

export default Login
