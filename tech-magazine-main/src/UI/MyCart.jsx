import React from 'react'
import styles from './MyCart.module.scss'

export const MyCartSlider = ({ isVisible, setVisible, children }) => {
	return (
		<div
			className={
				isVisible ? `${styles.wrapper} ${styles.activeRight}` : styles.wrapper
			}
			onClick={() => setVisible(false)}
		>
			<div
				className={isVisible ? styles.activeMenuRight : ''}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}
