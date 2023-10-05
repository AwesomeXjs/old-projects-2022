import React from 'react'
import styles from './Buyers.module.scss'
import { buyersArray } from '../../../redux/Data/footer/buyersArray'

const Buyers = () => {
	return (
		<div className={styles.buyers}>
			<h5 className={styles.buyersTitle}>Покупателям</h5>
			{buyersArray.map(link => (
				<a key={link.name} className={styles.buyersLink} href={link.path}>
					{link.name}
				</a>
			))}
		</div>
	)
}

export default Buyers
