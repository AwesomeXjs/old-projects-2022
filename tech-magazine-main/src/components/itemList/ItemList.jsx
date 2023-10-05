import React from 'react'
import styles from './ItemList.module.scss'
import Item from './item/Item'

const ItemList = ({ items }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Новинки</h2>
			<div className={styles.itemsWrapper}>
				{items.map(item => (
					<Item key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default ItemList
