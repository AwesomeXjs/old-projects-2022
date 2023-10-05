import React from 'react'
import searchIcon from '../../../assets/header/search.svg'
import styles from './Search.module.scss'

const Search = ({ search, setSearch }) => {
	return (
		<div className={styles.inputWrapper}>
			<input
				value={search}
				onChange={e => setSearch(e.target.value)}
				className={styles.input}
				type='text'
				placeholder='Ищите среди 10 000 товаров...'
			/>
			<img className={styles.searchIcon} src={searchIcon} alt='search' />
		</div>
	)
}

export default Search
