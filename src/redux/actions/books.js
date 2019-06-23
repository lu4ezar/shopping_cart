import dataFetcher from '../../utils/dataFetcher';
import { saveState } from '../../utils/localStorage';
import { changeLoadingState } from './loading';

export const hydrateList = () => dispatch => {
	return dataFetcher().then(books => {
		saveState({ books });
		dispatch(saveBooksToState(books));
		dispatch(changeLoadingState(false));
	});
};

export const saveBooksToState = data => ({
	type: 'HYDRATE_LIST',
	data
});
