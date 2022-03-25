import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { generalReducer } from "./redux/reducers/generalReducer";
import { matchingReducer } from "./redux/reducers/matchingReducer";
import { messagingReducer } from "./redux/reducers/messagingReducer";
import { onboardingReducer } from "./redux/reducers/onboardingReducer";

const rootReducer = combineReducers({
	general: generalReducer,
	matching: matchingReducer,
	messaging: messagingReducer,
	onboarding: onboardingReducer,
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
