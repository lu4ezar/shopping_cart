const productId = (state = null, action) => {
	switch (action.type) {
		case 'SET_PRODUCT_ID':
			return action.id;
		default:
			return state;
	}
};

export default productId;
