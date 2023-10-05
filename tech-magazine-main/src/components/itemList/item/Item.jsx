import React from 'react'
import hit from '../../../assets/item/hit.svg'
import newOpt from '../../../assets/item/new.svg'
import discOpt from '../../../assets/item/discount.svg'
import presOpt from '../../../assets/item/present.svg'
import present from '../../../assets/item/presentIn.svg'
import cart from '../../../assets/item/cart.svg'
import { useDispatch } from 'react-redux'
import styles from './Item.module.scss'
import { addItem, addValue } from '../../../redux/reducers/mainPage'

const Item = ({ item }) => {
	const dispatch = useDispatch()

	const addItemCart = item => {
		dispatch(addItem({ ...item, id: Date.now() }))
		dispatch(addValue(item.currentPrice))
	}
	return (
		<div key={item.id} className={styles.item}>
			<div className={styles.itemImageWrapper}>
				<img src={item.img} alt='img' />
			</div>
			<h5 className={styles.itemTitle}>{item.title}</h5>
			<div className={styles.itemValue}>
				<div className={styles.itemPrice}>
					{item.oldPrice > 0 && (
						<h3 className={styles.itemOldPrice}>{item.oldPrice} ₸</h3>
					)}
					<h3 className={styles.itemCurrentPrice}>{item.currentPrice} ₸</h3>
				</div>
				<div onClick={() => addItemCart(item)} className={styles.itemCart}>
					<img src={cart} alt='cart' />
				</div>
			</div>

			<div className={styles.itemOption}>
				{item.options.hit && (
					<div className={styles.HitOption}>
						<img src={hit} alt='hit' />
						<p className={styles.HitText}>Хит продаж</p>
					</div>
				)}
				{item.options.new && (
					<div className={styles.newOption}>
						<img src={newOpt} alt='hit' />
						<p className={styles.HitText}>Новинка</p>
					</div>
				)}
				{item.options.discount !== 0 && (
					<div className={styles.discOption}>
						<img src={discOpt} alt='hit' />
						<p className={styles.discText}>{item.options.discount}%</p>
					</div>
				)}
				{item.options.present && (
					<div className={styles.presOption}>
						<img src={presOpt} alt='hit' />
						<img className={styles.discText} src={present} alt='' />
					</div>
				)}
			</div>

			<div className={styles.colorOption}>
				{item.colors.map((color, i) => (
					<div key={i} className={styles.colorWrapper}>
						<div
							style={{ backgroundImage: color.backgroundImage }}
							className={styles.color}
						></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Item
