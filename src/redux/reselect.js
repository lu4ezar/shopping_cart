import { createSelector } from 'reselect';

const getId = state => state.productId;

const getBooks = state => state.books;

const getCart = state => state.cart;

export const getProductById = createSelector(
	[getBooks, getId],
	(books, id) => books.find(book => book.isbn13 === id)
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
