import React from 'react'
import Buyers from './buyers/Buyers'
import Company from './company/Company'
import Contacts from './contacts/Contacts'
import styles from './Footer.module.scss'
import Service from './service/Service'
import Subscription from './subscription/Subscription'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerTopWrapper}>
					<Subscription />
					<Company />
					<Buyers />
					<Service />
					<Contacts />
				</div>
			</div>
		</div>
	)
}

export default Footer
