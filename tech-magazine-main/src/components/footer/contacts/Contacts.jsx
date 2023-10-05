import React from 'react'
import styles from './Contacts.module.scss'

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<h5 className={styles.title}>Контакты</h5>
			<a className={styles.telContact} href='tel: +7(771) 936-54-54'>
				+7(771) 936-54-54
			</a>
			<p className={styles.time}>С 09:00 до 21:00 (без выходных)</p>
			<a
				className={`${styles.waContact} ${styles.hoverLinks}`}
				href='tel: +7(771) 936-54-54'
			>
				Написать на WhatsApp
			</a>
			<a
				className={`${styles.mailContact} ${styles.hoverLinks}`}
				href='mailto: support@evrika.com '
			>
				support@evrika.com
			</a>
		</div>
	)
}

export default Contacts
