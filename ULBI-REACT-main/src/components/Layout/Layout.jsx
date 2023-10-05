import { Outlet } from 'react-router-dom'
import React from 'react'
import style from './Layout.module.css'
import { CustomLink } from '../UI/CustomLink/CustomLink'
import MyButton from '../UI/button/MyButton'
import { useAuth } from '../../customHooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Layout = () => {
	const { signOut } = useAuth()
	const navigate = useNavigate()
	const exit = () => {
		signOut(() => {
			navigate('/Login', { replace: false })
		})
	}
	return (
		<div>
			<header className={style.header}>
				<CustomLink to='/'>Home</CustomLink>
				<CustomLink to='/about'>About</CustomLink>
				<CustomLink to='/singlepage'>Blog</CustomLink>
				<MyButton onClick={exit}>Выйти</MyButton>
			</header>
			<Outlet />
			<footer>prod by Awes0mex</footer>
		</div>
	)
}

export default Layout
