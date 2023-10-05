import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/UI/loader/loader'
import { useFetching } from '../customHooks/useFetching'

const Blogpage = () => {
	const [posts, setPosts] = useState([])

	const [isFetching, isLoading, Error] = useFetching(async () => {
		await axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => setPosts(response.data))
	})
	useEffect(() => {
		isFetching()
	}, [])
	return (
		<div>
			{isLoading ? <Loader /> : null}
			{posts.map(e => (
				<Link key={e.id} to={`/singlepage/${e.id}`}>
					<li>{e.title}</li>
				</Link>
			))}
			{Error && <h1>Произошла ошибка</h1>}
		</div>
	)
}

export default Blogpage
