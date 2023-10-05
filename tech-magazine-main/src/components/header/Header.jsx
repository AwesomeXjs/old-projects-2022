import React from 'react'
import logo from '../../assets/header/logo.svg'

import HeaderTop from './headerTop/HeaderTop'
import styles from './Header.module.scss'
import Search from './search/Search'
import HeaderIcons from './headerIcons/HeaderIcons'
import { useMediaQuery } from 'react-responsive'
import SideBar from '../sideBarSlider/sidebar/SideBar'

const Header = ({ search, setSearch, setVisible, visible }) => {
	const MobileMenu = useMediaQuery({ query: '(max-width: 768px)' })
	return (
		<div className={styles.header}>
			<HeaderTop />
			<div className={styles.headerMainWrapper}>
				<div className={styles.container}>
					<div className={styles.headerMain}>
						<img className={styles.logo} src={logo} alt='logo' />
						<Search search={search} setSearch={setSearch} />
						<HeaderIcons visible={visible} setVisible={setVisible} />
						{MobileMenu && <SideBar />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
