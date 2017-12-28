// @flow
import { AsyncStorage } from "react-native";
import { composeWithDevTools } from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "../reducers";

export default function configureStore(onCompletion: () => void): any {

	const composeEnhancers = composeWithDevTools({ realtime: true});
	const enhancer = composeEnhancers(
		applyMiddleware(thunk)
	);

	const store = createStore(reducer, enhancer);
	persistStore(store, { storage: AsyncStorage }, onCompletion);

	return store;
}

// devTools({
// 	hostname: 'localhost',
// 	port: 5678,
// 	name: "nativestarterkit",
// 	realtime: true
// })
