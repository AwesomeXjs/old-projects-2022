import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) //сортировка
		}
		return posts
	}, [sort, posts])
	return sortedPosts
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort)
	const searchAndSelectedPosts = useMemo(() => {
		return sortedPosts.filter(
			post => post.title.toLowerCase().includes(query.toLowerCase()) //поиск на основе отсортированного массива
		)
	}, [query, sortedPosts])
	return searchAndSelectedPosts
}
