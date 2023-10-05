import React from 'react'
import MyButton from '../UI/button/MyButton'
import { CustomLink } from '../UI/CustomLink/CustomLink'
import style from './PostItem.module.css'

const PostItem = ({ post, number, remove }) => {
	return (
		<div className={style.post}>
			<div>
				<h1>
					{post.id}. {post.title}
				</h1>
				<div>{post.body}</div>
			</div>
			<div>
				<CustomLink to={`/postpage/${post.id}`}>Переход</CustomLink>
				<MyButton onClick={() => remove(post)} className={style.button}>
					Удалить
				</MyButton>
			</div>
		</div>
	)
}

export default PostItem
