import React from 'react'
import { brands } from '../../redux/Data/brands/brandsArray'
import styles from './brands.module.scss'

const Brands = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				{brands.map(brand => (
					<div key={brand} className={styles.item}>
						<img src={brand} alt='brand' />
					</div>
				))}
			</div>
		</div>
	)
}

export default Brands
