import React from 'react'
import { addItem, changeValue, removeItem } from '../../redux/reducers/mainPage'
import { useDispatch } from 'react-redux'
import './CartTransition.scss'
import styles from './Cart.module.scss'

const CartItem = ({ item, cartValue }) => {
	const dispatch = useDispatch()
	const removeItemCart = item => {
		dispatch(removeItem(item.id))
		dispatch(changeValue(cartValue - item.currentPrice))
	}
	const addItemCart = item => {
		dispatch(addItem({ ...item, id: Date.now() }))
		dispatch(changeValue(cartValue + item.currentPrice))
	}
	return (
		<div className={styles.cartItem}>
			<img src={item.img} alt='img' />
			<div className={styles.description}>
				<div className={styles.title}>
					<span>Название: </span>
					<span className={styles.titleItem}>{item.title}</span>
				</div>
				{item.colors.length > 0 ? (
					<div className={styles.color}>
						<span>Цвет: </span>
						<span
							className={styles.colorItem}
							style={{ backgroundImage: item.colors[2].backgroundImage }}
						></span>
					</div>
				) : null}
			</div>
			<div className={styles.price}>
				<h5>Цена: </h5>
				<h5>{item.currentPrice}</h5>
			</div>
			<div className={styles.terminal}>
				<div onClick={() => addItemCart(item)} className={styles.increment}>
					Добавить
				</div>
				<div onClick={() => removeItemCart(item)} className={styles.decrement}>
					Удалить
				</div>
			</div>
		</div>
	)
}

export default CartItem
