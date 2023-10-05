import React, { useState } from 'react'
import styles from './Subs.module.scss'

const CheckForm = () => {
	const [check, setCheck] = useState(true)
	return (
		<>
			<div className={styles.choice}>
				<div onClick={() => setCheck(true)} className={styles.choiceItem}>
					<div
						className={
							check === true ? `${styles.check} ${styles.active}` : styles.check
						}
					>
						<span></span>
					</div>
					<h5>Номер телефона</h5>
				</div>
				<div onClick={() => setCheck(false)} className={styles.choiceItem}>
					<div
						className={
							check === false
								? `${styles.check} ${styles.active}`
								: styles.check
						}
					>
						<span></span>
					</div>
					<h5>Email</h5>
				</div>
			</div>

			{check ? (
				<input
					placeholder='Номер телефона'
					className={styles.input}
					type='tel'
				/>
			) : (
				<input placeholder='Email' className={styles.input} type='mail' />
			)}
		</>
	)
}

export default CheckForm
