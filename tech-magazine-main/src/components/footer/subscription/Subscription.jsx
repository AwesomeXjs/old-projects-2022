import React from 'react'
import { contactsArray } from '../../../redux/Data/footer/footerContancts'
import CheckForm from './CheckForm'
import styles from './Subs.module.scss'

const Subscription = () => {
	return (
		<div className={styles.subscribe}>
			<h4>Подписаться на нас</h4>
			<div className={styles.subsIcons}>
				{contactsArray.map((contact, i) => (
					<a key={i} href={contact.path} className={styles.subsItem}>
						<img src={contact.element} alt='facebook' />
					</a>
				))}
			</div>
			<p className={styles.description}>
				Получайте новые акции и скидки одним из первых
			</p>
			<CheckForm />
		</div>
	)
}

export default Subscription
