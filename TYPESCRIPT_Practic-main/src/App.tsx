import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserPage from './components/UserPage'
import ToDoPage from './components/ToDoPage'
import { NavLink } from 'react-router-dom'
import UserItemPage from './components/UserItemPage'
import ToDoItemPage from './components/ToDoItemPage'

function App() {
	return (
		<BrowserRouter>
			<div>
				<NavLink to={'/users'}>Юзеры</NavLink>
				<NavLink to={'/todos'}>Тудушки</NavLink>
			</div>
			<Routes>
				<Route path={'/users'} element={<UserPage />} />
				<Route path={'/todos'} element={<ToDoPage />} />
				<Route path={'/users/:id'} element={<UserItemPage />} />
				<Route path={'/todos/:id'} element={<ToDoItemPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
