import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './routes'
import RequiredAuth from './RequiredAuth'
import Layout from '../Layout/Layout'
import StartPage from '../../pages/startPage'

const AppRouter = () => {
	const auth = true
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{PrivateRoutes.map(route => {
					const Component = route.component
					return (
						<Route
							key={route.path}
							path={route.path}
							element={
								<RequiredAuth auth={auth}>
									<Component />
								</RequiredAuth>
							}
						/>
					)
				})}
				{PublicRoutes.map(route => {
					const Component = route.component
					return (
						<Route key={route.path} path={route.path} element={<Component />} />
					)
				})}
				<Route index element={<StartPage />} />
			</Route>
		</Routes>
	)
}

export default AppRouter
