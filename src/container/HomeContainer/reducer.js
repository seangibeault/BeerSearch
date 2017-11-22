const initialState = {
	list: [],
	isLoading: false,
	beers:{
	}
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "FETCH_LIST_SUCCESS") {
		return {
			...state,
			list: action.list,
		};
	}
	if (action.type === "IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	if (action.type === "SEARCH_BEER_SUCCESS"){
		return {
			...state,
			beers: action.data,
			isLoading: false
		};
	}
	return state;
}
