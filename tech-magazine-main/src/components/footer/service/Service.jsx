import React from 'react'
import styles from './Service.module.scss'
import { serviceArray } from '../../../redux/Data/footer/serviceArray'

const Service = () => {
	return (
		<div className={styles.service}>
			<h5 className={styles.serviceTitle}>Услуги и сервисы</h5>
			{serviceArray.map(link => (
				<a key={link.name} className={styles.serviceLink} href={link.path}>
					{link.name}
				</a>
			))}
		</div>
	)
}

export default Service
