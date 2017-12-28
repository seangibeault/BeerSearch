import searchAPI from "../../APIs/searchAPI";

// export function listIsLoading(bool: boolean) {
// 	return {
// 		type: "IS_LOADING",
// 		isLoading: bool,
// 	};
// }
// export function fetchListSuccess(list: Object) {
// 	return {
// 		type: "FETCH_LIST_SUCCESS",
// 		list,
// 	};
// }
// export function fetchList(url: any) {
// 	return dispatch => {
// 		dispatch(fetchListSuccess((url: any)));
// 		dispatch(listIsLoading(false));
// 	};
// }
export function beerSearch(name: String) {
	return (dispatch, getState) => {
		dispatch({
			type: "SEARCH_IS_LOADING",
			isLoading: true,
		});

		searchAPI.searchBeerByName(name).then((response) => (response.json())).then(function (data) {
			dispatch({ type: "SEARCH_BEER_SUCCESS", data });
		}).catch((error) => {
		});
	};
}
