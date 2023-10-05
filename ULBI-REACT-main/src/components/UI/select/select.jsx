import React from 'react'
import style from './select.module.css'

const MySelect = ({ options, defaultValue, value, onChange }) => {
	return (
		<div>
			<select
				value={value}
				onChange={event => onChange(event.target.value)}
				className={style.select}
			>
				<option disabled value='value1'>
					{defaultValue}
				</option>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	)
}

export default MySelect
