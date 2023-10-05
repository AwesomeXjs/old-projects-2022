import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import style from './CustomLink.module.css'

export const CustomLink = ({ children, to, ...props }) => {
	const match = useMatch(to) //хук проверяет текущую страницу и возвращает обьект если страница совпадает( активная страница) либо возвращает null

	return (
		<Link
			to={to}
			style={{ borderBottom: match ? '2px solid #fff' : '' }}
			className={style.link}
			{...props}
		>
			{children}
		</Link>
	)
}
