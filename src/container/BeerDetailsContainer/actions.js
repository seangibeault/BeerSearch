import searchAPI from "../../APIs/searchAPI";

export function getBeerDetails(id: Number) {
	return (dispatch, getState) => {

		console.log("get beer id: " + id);

		let beer = getState().homeReducer.beers.data ? getState().homeReducer.beers.data.find(b => (b.id === id)) : false;

		if (beer) {
			console.log("beer Details", beer);
			dispatch({ type: "GET_DETAILS_SUCCESS", beerDetails: beer });
		} else {
			dispatch({
				type: "DETAILS_IS_LOADING",
				isLoading: true,
			});

			searchAPI.getBeerById(id).then((response) => (response.json())).then((data) => {
				console.log("beer Details", data);
				dispatch({ type: "GET_DETAILS_SUCCESS", beerDetails: data.data });
			});
		}


	}
}

export function clearBeerDetails() {
	return dispatch => {
		dispatch({ type: "DETAILS_CLEAR" });
	}
}
