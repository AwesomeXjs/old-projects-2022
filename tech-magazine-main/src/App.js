import About from './components/about/About'
import Brands from './components/brands/Brands'
import Footer from './components/footer/Footer'
import FooterBottom from './components/footerBottom/FooterBottom'
import Header from './components/header/Header'
import ItemList from './components/itemList/ItemList'
import SideBarSlider from './components/sideBarSlider/SideBarSlider'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import styles from './App,module.scss'
import { MyCartSlider } from './UI/MyCart'
import Cart from './components/cart/Cart'

function App() {
	const { items, isVisibleCart } = useSelector(state => state)
	const [visible, setVisible] = useState(isVisibleCart)
	const [search, setSearch] = useState('')
	const filterItems = items.filter(item => {
		return item.title.toLowerCase().includes(search.toLowerCase())
	})

	return (
		<div className='App'>
			<Header
				visible={visible}
				setVisible={setVisible}
				search={search}
				setSearch={setSearch}
			/>
			<div className={styles.content}>
				<MyCartSlider setVisible={setVisible} isVisible={visible}>
					<Cart setVisible={setVisible} />
				</MyCartSlider>
				<SideBarSlider />
				<ItemList items={filterItems} />
				<Brands />
				<About />
				<Footer />
				<FooterBottom />
			</div>
		</div>
	)
}

export default App
