import React from 'react'
import SideBar from './sidebar/SideBar'
import styles from './sideBarSlider.module.scss'
import { useMediaQuery } from 'react-responsive'
import Slider from './slider/Slider'

const SideBarSlider = () => {
	const MobileMenu = useMediaQuery({ query: '(max-width: 768px)' })
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				{MobileMenu ? null : <SideBar />}
				<Slider />
			</div>
		</div>
	)
}

export default SideBarSlider
