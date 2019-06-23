import axios from 'axios';

const dataFetcher = () => {
	const proxy = 'cors-anywhere.herokuapp.com';
	const link = 'https://' + proxy + '/https://api.itbook.store/1.0/new';
	return axios.get(link).then(
		response => response.data.books,
		error => {
			console.log(error);
		}
	);
};

export default dataFetcher;
