import React, { useState } from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'

const FormPost = ({ create }) => {
	const [post, setPost] = useState({
		title: '',
		body: '',
	})
	const addNewPost = e => {
		e.preventDefault()
		if (post.title || post.body) {
			const newPost = {
				...post,
				id: Date.now(),
			}
			create(newPost)
			setPost({ ...post, title: '', body: '' })
		}
	}
	const changeTitle = e => {
		setPost({ ...post, title: e.target.value })
	}
	const changeBody = e => {
		setPost({ ...post, body: e.target.value })
	}
	return (
		<form>
			<MyInput
				onChange={changeTitle}
				value={post.title}
				type={'text'}
				placeholder={'Заголовок поста'}
			/>
			{/* <input ref={inputRef} type='text' /> */}
			<MyInput
				// ref={inputRef}
				onChange={changeBody}
				value={post.body}
				type={'text'}
				placeholder={'Описание'}
			/>
			<MyButton onClick={addNewPost}>Добавить пост</MyButton>
		</form>
	)
}

export default FormPost
