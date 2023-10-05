import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
	user: IUser
	onClick: (iser: IUser) => void
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
	return (
		<div
			onClick={() => onClick(user)}
			style={{ padding: 15, border: '1px solid #000' }}
		>
			{user.id}. {user.name} проживает в городе {user.address.city} на улице
			{user.address.street}
		</div>
	)
}

export default UserItem
