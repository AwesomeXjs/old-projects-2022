import React from 'react'
import MyInput from '../UI/input/MyInput'
import MySelect from '../UI/select/select'

const Filter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder={'Поиск...'}
			/>
			<MySelect
				value={filter.sort}
				onChange={selectedsort => setFilter({ ...filter, sort: selectedsort })}
				options={[
					{ value: 'title', name: 'По имени' },
					{ value: 'body', name: 'По описанию' },
				]}
				defaultValue={'Сортировка по'}
			/>
		</div>
	)
}

export default Filter
