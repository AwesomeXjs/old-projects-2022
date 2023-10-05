import React from 'react'
import userIcon from '../../../assets/header/user.svg'
import scalesIcon from '../../../assets/header/idk.svg'
import favoriteIcon from '../../../assets/header/favorites.svg'
import cart from '../../../assets/header/cart.svg'
import { useSelector, useDispatch } from 'react-redux'
import styles from './HeaderIcons.module.scss'
import { toggleMobileMenu } from '../../../redux/reducers/mainPage'

const HeaderIcons = ({ setVisible, visible }) => {
	const { cartItems, cartValue, mobileMenuVisible } = useSelector(
		state => state
	)
	const dispatch = useDispatch()
	return (
		<>
			<div className={styles.headerIcons}>
				<div className={styles.itemIcons}>
					<img className={styles.userIcon} src={userIcon} alt='userIcon' />
				</div>
				<div className={styles.itemIcons}>
					<img className={styles.scalesIcon} src={scalesIcon} alt='scales' />
				</div>
				<div className={styles.itemIcons}>
					<img
						className={styles.favoriteIcon}
						src={favoriteIcon}
						alt='favoriteIcon'
					/>
					<div className={`${styles.Value} ${styles.valueMob}`}>
						<p>1</p>
					</div>
				</div>
				<div className={styles.burgerWrapper}>
					<div
						onClick={() => setVisible(!visible)}
						className={`${styles.itemIcons} ${styles.mobileCart}`}
					>
						<img className={styles.cartIcon} src={cart} alt='cartIcon' />
						{cartItems.length > 0 && (
							<div className={styles.Value}>
								<p>{cartItems.length}</p>
							</div>
						)}
					</div>
					<div className={styles.cartText}>
						<p className={styles.cartTitle}>Корзина</p>
						<p className={styles.cartValue}>{cartValue} ₸</p>
					</div>
				</div>
				<div
					onClick={() => dispatch(toggleMobileMenu(!mobileMenuVisible))}
					className={
						mobileMenuVisible
							? `${styles.hamburgerWrapper} ${styles.active}`
							: styles.hamburgerWrapper
					}
				>
					<span className={styles.hamburgerSpan}></span>
				</div>
			</div>
		</>
	)
}

export default HeaderIcons
