import axios from 'axios';
import { hydrateList } from '../redux/actions/list';
import { changeLoadingState } from '../redux/actions/loading';

const dataFetcher = () => dispatch => {
	const proxy = 'cors-anywhere.herokuapp.com';
	const link = 'https://' + proxy + '/https://api.itbook.store/1.0/new';
	axios.get(link).then(
		response => {
			dispatch(hydrateList(response.data.books));
			dispatch(changeLoadingState(false));
		},
		error => {
			console.log(error);
		}
	);
};

export default dataFetcher;
