import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useFetching } from '../customHooks/useFetching'
import Loader from '../components/UI/loader/loader'
import MyButton from '../components/UI/button/MyButton'
import { CustomLink } from '../components/UI/CustomLink/CustomLink'

const SinglePage = () => {
	const [post, setPost] = useState(null)
	const nagigate = useNavigate()
	const goBack = () => nagigate(-1)
	const goHome = () => nagigate('/', { replace: true })
	const { id } = useParams()

	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		await axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => setPost(response.data))
	})
	useEffect(() => {
		fetchPosts()
	}, [id])
	return (
		<div>
			<MyButton onClick={goBack}>Go Back</MyButton>
			{/* BAD: */}
			<MyButton onClick={goHome}>Go Home</MyButton>
			<CustomLink to='/'>Go Home</CustomLink>
			{isPostLoading ? <Loader /> : null}
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</>
			)}
			{postError && <h1>Произошла ошибка</h1>}
		</div>
	)
}

export default SinglePage
