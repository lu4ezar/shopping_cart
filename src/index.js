import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { saveState } from './utils/localStorage';
import getInitialState from './utils/initialState';
import throttle from 'lodash/throttle';
import { changeLoadingState } from './redux/actions/loading';
import { hydrateList } from './redux/actions/books';

const initialState = getInitialState();
const store = configureStore(initialState);

if (!initialState || !initialState.books) {
	store.dispatch(hydrateList());
} else {
	store.dispatch(changeLoadingState(false));
}

store.subscribe(
	throttle(() => {
		saveState({
			cart: store.getState().cart
		});
	}, 1000)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
