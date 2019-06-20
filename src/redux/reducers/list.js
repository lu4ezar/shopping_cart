const list = (state = [], action) => {
	switch (action.type) {
		case 'HYDRATE_LIST':
			return action.data;
		default:
			return state;
	}
};

export default list;
