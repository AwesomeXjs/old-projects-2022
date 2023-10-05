import React from 'react'
import logo from '../../assets/header/logo.svg'
import styles from './FooterBottom.module.scss'

const FooterBottom = () => {
	const today = new Date()
	return (
		<div className={styles.bottom}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.item}>
						<img src={logo} alt='logo' />
					</div>
					<div className={styles.item}>
						<p>Политика конфиденциальности • Карта сайта </p>
					</div>
					<div className={styles.item}>
						<p>Copyright © 2013 - {today.getFullYear()} ТОО Компания Эврика</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterBottom
