export const updateCart = payload => ({
	type: 'UPDATE_CART',
	payload: {
		id: payload.id,
		quantity: payload.quantity
	}
});
