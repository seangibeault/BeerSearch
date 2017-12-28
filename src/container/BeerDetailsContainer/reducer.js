const initialState = {
	beerDetails: {},
	isLoading: false,
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "DETAILS_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	if (action.type === "DETAILS_CLEAR"){
		return {
			...state,
			initialState
		};
	}
	if (action.type === "GET_DETAILS_SUCCESS"){
		return {
			...state,
			beerDetails: action.beerDetails,
			isLoading: false
		};
	}
	return state;
}
