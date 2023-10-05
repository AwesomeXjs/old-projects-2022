import React from 'react'
import logo from '../../assets/header/logo.svg'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Cart.module.scss'
import { changeValue, removeCart } from '../../redux/reducers/mainPage'
import CartItem from './CartItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import EmptyCart from './EmptyCart/EmptyCart'

const Cart = ({ setVisible }) => {
	const { cartItems, cartValue } = useSelector(state => state)
	const dispatch = useDispatch()

	const deleteCart = () => {
		dispatch(removeCart([]))
		dispatch(changeValue(0))
	}

	return (
		<div className={styles.wrapper}>
			<img className={styles.logo} src={logo} alt='' />
			{cartItems.length > 0 ? (
				<div className={styles.cartWrapper}>
					<div className={styles.headerCart}>
						<div className={styles.cartValue}>
							<h4>Всего: </h4>
							<p>{cartValue} ₸</p>
						</div>
						<div className={styles.delete}>
							<MdOutlineDeleteForever />
							<p onClick={deleteCart}>Очистить корзину</p>
						</div>
					</div>
					<TransitionGroup>
						{cartItems.map((item, i) => (
							<CSSTransition key={i} timeout={500} classNames='item'>
								<CartItem item={item} cartValue={cartValue} />
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			) : (
				<EmptyCart setVisible={setVisible} />
			)}
		</div>
	)
}

export default Cart
