import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../../customHooks/useAuth'
const RequiredAuth = ({ children, auth }) => {
	const location = useLocation()
	const { user } = useAuth()
	if (!user) {
		return <Navigate to='/Login' state={{ from: location }} />
	}
	return children
}

export default RequiredAuth
