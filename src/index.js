import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import dataFetcher from './utils/dataFetcher';
import configureStore from './redux/configureStore';

const store = configureStore();

store.dispatch(dataFetcher())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
