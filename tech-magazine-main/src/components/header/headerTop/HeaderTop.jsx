import React from 'react'
import locationIcon from '../../../assets/header/location.svg'
import phoneIcon from '../../../assets/header/phone.svg'
import contactArrow from '../../../assets/header/phoneArrow.svg'
import styles from './HeaderTop.module.scss'

const HeaderTop = () => {
	return (
		<div style={{ backgroundColor: '#fff' }}>
			<div className={styles.container}>
				<div className={styles.headerTop}>
					<div className={styles.location}>
						<img
							className={styles.locationIcon}
							src={locationIcon}
							alt='location'
						/>
						<p className={styles.locationPlace}>Алматы</p>
					</div>
					<div className={styles.contact}>
						<img className={styles.phoneIcon} src={phoneIcon} alt='phone' />
						<p className={styles.contactTitle}>Помощь и консультация</p>
						<img src={contactArrow} alt='arrow' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderTop
