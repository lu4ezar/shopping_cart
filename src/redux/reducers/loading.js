export const loading = (state = true, action) => {
	switch (action.type) {
		case 'CHANGE_LOADING_STATE':
			return action.loading;
		default:
			return state;
	}
};
