import { combineReducers } from 'redux';
import books from './books';
import loading from './loading';
import cart from './cart';
import productId from './productId';

export default combineReducers({
	books,
	loading,
	cart,
	productId
});
