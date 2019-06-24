export const cart = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return state[action.id]
				? { ...state, [action.id]: state[action.id] + 1 }
				: { ...state, [action.id]: 1 };
		case 'REMOVE_FROM_CART':
			return state[action.id] && state[action.id] > 1
				? { ...state, [action.id]: state[action.id] - 1 }
				: removeBookFromCart(state, action.id);
		default:
			return state;
	}
};

const removeBookFromCart = (cart, id) => {
	const { [id]: bookToRemove, ...booksWithNonZeroQuantity } = cart;
	return booksWithNonZeroQuantity;
};
