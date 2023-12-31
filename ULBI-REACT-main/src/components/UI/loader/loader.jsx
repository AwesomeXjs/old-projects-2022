import React from 'react'
import style from './loader.module.css'

const Loader = () => {
	return (
		<div className={style.loaderWrapper}>
			<div className={style.loader}></div>
		</div>
	)
}

export default Loader
