import { useEffect, useRef, useState } from 'react'
import PostService from '../API/PostService'
import Filter from '../components/filter/Filter'
import FormPost from '../components/Form/FormPost'
import PostList from '../components/PostList'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/loader'
import MyModal from '../components/UI/modal/MyModal'
import Pages from '../components/UI/pagination/pages'
import { useFetching } from '../customHooks/useFetching'
import { usePosts } from '../customHooks/usePosts'
import '../styles/App.css'
import { getPagesCount } from '../utils/pages'
import { useObserver } from '../customHooks/useObserver'
import MySelect from '../components/UI/select/select'

function StartPage() {
	const [posts, setPosts] = useState([])
	const [modal, setModal] = useState(false)
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query) // кастомный хук
	const [limit, setLimit] = useState(10)
	const [totalPages, setTotalPages] = useState(10)
	const [page, setPage] = useState(1)
	const lastElement = useRef()

	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts([...posts, ...response.data])
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPagesCount(totalCount, limit))
	})

	useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1)
	})

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}
	const changePage = page => {
		setPage(page)
	}

	useEffect(() => {
		fetchPosts()
	}, [page, limit])
	// const inputRef = useRef() //Можно получить доступ к дом элементу

	return (
		<div className='App'>
			<MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<FormPost create={createPost} />
			</MyModal>
			<hr style={{ marginTop: 20, marginBottom: 20 }} />
			<Filter
				filter={filter}
				setFilter={setFilter}
				defaultValue={'Количество постов на странице'}
			/>
			<MySelect
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue='Количество страниц'
				options={[
					{ value: 5, name: '5' },
					{ value: 10, name: '10' },
					{ value: 25, name: '25' },
					{ value: -1, name: 'Показать все' },
				]}
			/>
			<Pages totalPages={totalPages} page={page} changePage={changePage} />
			{postError && <h1>Произошла ошибка</h1>}
			<PostList
				remove={removePost}
				posts={sortedAndSearchPosts}
				title={'Список постов'}
			/>
			<div
				ref={lastElement}
				style={{ height: 20, backgroundColor: 'red' }}
			></div>
			{isPostLoading && (
				<div
					style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}
				>
					<Loader />
				</div>
			)}
		</div>
	)
}

export default StartPage
