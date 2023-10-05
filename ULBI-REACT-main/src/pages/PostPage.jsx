import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/loader'
import { useFetching } from '../customHooks/useFetching'

const PostPage = () => {
	const [post, setPost] = useState(null)
	const [comments, setComments] = useState([])
	const { id } = useParams()
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	const [isFetching, isLoading, postError] = useFetching(async () => {
		await PostService.getByID(id, setPost)
	})
	const [isComFetch, isComLoad, postComError] = useFetching(async () => {
		await PostService.getComments(id, setComments)
	})
	useEffect(() => {
		isFetching()
		isComFetch()
	}, [id])
	return (
		<div>
			<MyButton onClick={goBack}>Go Back</MyButton>
			{isLoading ? <Loader /> : null}
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</>
			)}
			{postError && <h1>Произошла ошибка</h1>}
			<div>
				{isComLoad ? <Loader /> : null}
				<h1>КОМЕНТАРИИ</h1>
				{comments && (
					<>
						{comments.map(e => (
							<div>
								<h1>Имя :{e.name}</h1>
								<h5>Email: {e.email}</h5>
								<p>Comment: {e.body}</p>
							</div>
						))}
					</>
				)}
				{postComError && <h1>Ошибка коментариев</h1>}
			</div>
		</div>
	)
}

export default PostPage
