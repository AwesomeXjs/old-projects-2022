import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { PATH_LOGIN } from './Routes'

export const AuthHoC = ({ children }) => {
	const isAuth = useSelector(state => state.login.isAuth)
	const location = useLocation()

	if (!isAuth) {
		return <Navigate to={PATH_LOGIN} state={{ from: location }} />
	}
	return children
}
