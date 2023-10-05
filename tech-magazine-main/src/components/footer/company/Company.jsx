import React from 'react'
import styles from './Company.module.scss'
import { companyLinks } from '../../../redux/Data/footer/companyArray'

const Company = () => {
	return (
		<div className={styles.company}>
			<h5 className={styles.companyTitle}>Компания Evrika</h5>
			{companyLinks.map(link => (
				<a key={link.name} className={styles.companyLink} href={link.path}>
					{link.name}
				</a>
			))}
		</div>
	)
}

export default Company
