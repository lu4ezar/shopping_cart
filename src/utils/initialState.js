import { loadState } from './localStorage';

const getInitialState = () => {
	let initialState;
	try {
		initialState = loadState();
		if (!initialState.books) {
			throw new Error('no saved state!');
		}
	} catch (err) {
		console.log("Couldn't get state from localStorage: " + err.message);
	}
	return initialState;
};

export default getInitialState;
