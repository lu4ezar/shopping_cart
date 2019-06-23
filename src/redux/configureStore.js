import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = initialState =>
	createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
