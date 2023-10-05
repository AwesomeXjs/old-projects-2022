import { createSlice } from '@reduxjs/toolkit'
import { items } from '../Data/itemList/items'

const initialState = {
	items: items,
	isVisibleCart: false,
	cartItems: [],
	cartValue: 0,
	mobileMenuVisible: false,
}
export const mainPageSlice = createSlice({
	name: 'main-page',
	initialState,
	reducers: {
		addItem(state, action) {
			state.cartItems.push(action.payload)
		},
		addValue(state, action) {
			state.cartValue = state.cartValue + action.payload
		},
		removeCart(state, action) {
			state.cartItems = action.payload
		},
		changeValue(state, action) {
			state.cartValue = action.payload
		},
		removeItem(state, action) {
			state.cartItems = state.cartItems.filter(
				item => item.id !== action.payload
			)
		},
		toggleMobileMenu(state, action) {
			state.mobileMenuVisible = action.payload
		},
	},
})

export const mainPageReducer = mainPageSlice.reducer
export const {
	addItem,
	removeItem,
	addValue,
	removeCart,
	changeValue,
	toggleMobileMenu,
} = mainPageSlice.actions
