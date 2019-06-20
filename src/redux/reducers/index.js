import { combineReducers } from 'redux';
import list from './list';
import loading from './loading';
import cart from './cart';
import productId from './productId';

export default combineReducers({
	list,
	loading,
	cart,
	productId
});
