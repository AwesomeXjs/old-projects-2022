import React, { FC, useState } from 'react'

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width: string
	height: string
	variant: CardVariant
	children: React.ReactNode
	onClick: (num: number) => void
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
	const [num, setnum] = useState<any>(0)
	return (
		<div
			onClick={() => onClick(num)}
			style={{
				width,
				height,
				border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
				background: variant === CardVariant.primary ? 'lightgray' : ' ',
			}}
		>
			{children}
		</div>
	)
}

export default Card
