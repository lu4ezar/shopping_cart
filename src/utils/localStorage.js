export const saveState = state => {
	try {
		Object.entries(state).forEach(([key, value]) => {
			localStorage.setItem(key, JSON.stringify(value));
		});
	} catch (err) {
		console.log("Can't save state to localStorage: ", err);
	}
};

export const loadState = () => {
	try {
		const serializedState = Object.keys(localStorage).reduce((acc, key) => {
			const serializedState = localStorage.getItem(key);
			if (serializedState == null) {
				return acc;
			}
			return { ...acc, [key]: JSON.parse(serializedState) };
		}, {});
		return serializedState;
	} catch (err) {
		console.error("couldn't load state");
	}
};
