import React from 'react'
import styles from './EmptyCart.module.scss'
import { BsCartXFill } from 'react-icons/bs'

const EmptyCart = ({ setVisible }) => {
	const closeCart = () => setVisible(false)
	return (
		<div className={styles.wrapper}>
			<BsCartXFill className={styles.emptyIcon} />
			<h1>Вы не добавили ничего в корзину</h1>
			<button onClick={closeCart} className={styles.emptyBtn}>
				Вернуться к покупкам
			</button>
		</div>
	)
}

export default EmptyCart
