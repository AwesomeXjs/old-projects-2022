import React from 'react'
import { getPagesArray } from '../../../utils/pages'
import './pages.css'

const Pages = ({ totalPages, changePage, page }) => {
	let pagesArray = getPagesArray(totalPages)
	return (
		<div>
			{pagesArray.map(e => (
				<span
					onClick={() => changePage(e)}
					key={e}
					className={page === e ? 'pagination page__current' : 'pagination'}
				>
					{e}
				</span>
			))}
		</div>
	)
}

export default Pages
