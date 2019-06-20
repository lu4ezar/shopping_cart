import { createSelector } from 'reselect';

const getId = state => state.productId;

const getList = state => state.list;

const getCart = state => state.cart;

export const getProductById = createSelector(
	[getList, getId],
	(list, id) => list.find(book => book.isbn13 === id)
);

export const getBookInCartCount = createSelector(
	[getId, getCart],
	(id, cart) => cart[id]
);

export const getTotalCart = createSelector(
	[getCart],
	cart =>
		Object.values(cart) && Object.values(cart).length > 0
			? Object.values(cart).reduce((acc, cur) => acc + cur, 0)
			: 0
);
