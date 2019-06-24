import { createSelector } from 'reselect';

const getId = state => state.productId;

const getBooks = state => state.books;

const getCart = state => state.cart;

export const getBookByIsbn13 = createSelector(
	[getBooks, getId],
	(books, id) => books.find(book => book.isbn13 === id)
);

export const getCartBookTitlesByIsbn13 = createSelector(
	[getBooks, getCart],
	(books, cart) =>
		books.reduce((acc, book) => {
			if (cart[book.isbn13]) {
				acc.push(book.title);
			}
			return acc;
		}, [])
);

export const getBookInCartQuantity = createSelector(
	[getId, getCart],
	(id, cart) => cart[id]
);

export const getTotalCartQuantity = createSelector(
	[getCart],
	cart =>
		Object.values(cart) && Object.values(cart).length > 0
			? Object.values(cart).reduce((acc, cur) => acc + cur, 0)
			: 0
);

export const getTotalCartSum = createSelector(
	[getBooks, getCart],
	(books, cart) =>
		Object.entries(cart).reduce((acc, [id, quantity]) => {
			const price = books.find(({ isbn13 }) => isbn13 === id).price;
			const parsedPrice = Number(price.replace(/[^0-9.-]+/g, ''));
			return (acc += parsedPrice * quantity);
		}, 0)
);
