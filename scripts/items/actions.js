export default function(dispatch) {
	return {
		create: (title) => {
			dispatch({
				type: 'CREATE',
				payload: {
					title
				}
			});
		},
	}
}
