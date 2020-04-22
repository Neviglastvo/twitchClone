import "assets/sass/app.sass"
import React from "react"
import { Auth0Provider } from "components/TwitchAuth/react-auth0-spa"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { rootReducer } from "redux/rootReducer"
import history from "utils/history"
import App from "./App"
import { createBrowserHistory } from "history"

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk),
		// other store enhancers if any
	),
)

createBrowserHistory()

// A function that routes the user to the right place after login
const onRedirectCallback = (appState) => {
	history.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname,
	)
}

const config = {
	domain: "nevejestvo.eu.auth0.com",
	clientId: "2ZJxhsyNynJIDymj0h34rM657bL8flSe",
	redirect_uri: "http://localhost:3000/profile",
}

ReactDOM.render(
	<Provider store={store}>
		<Auth0Provider
			domain={config.domain}
			client_id={config.clientId}
			redirect_uri={config.redirect_uri}
			onRedirectCallback={onRedirectCallback}
		>
			<App />
		</Auth0Provider>
	</Provider>,
	document.getElementById("root"),
)
