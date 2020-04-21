// src/react-auth0-spa.js
import React, { useState, useEffect, useContext, useCallback } from "react"
import createAuth0Client from "@auth0/auth0-spa-js"

const storageName = "userData"

const DEFAULT_REDIRECT_CALLBACK = () =>
	window.history.replaceState({}, document.title, window.location.pathname)

export const Auth0Context = React.createContext()
export const useAuth0 = () => useContext(Auth0Context)
export const Auth0Provider = ({
	children,
	onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
	...initOptions
}) => {
	const [isAuthenticated, setIsAuthenticated] = useState()
	const [user, setUser] = useState()
	const [auth0Client, setAuth0] = useState()
	const [loading, setLoading] = useState(true)
	const [popupOpen, setPopupOpen] = useState(false)

	useEffect(() => {
		console.log("user :", user)
	}, [user])

	useEffect(() => {
		const initAuth0 = async () => {
			const auth0FromHook = await createAuth0Client(initOptions)
			setAuth0(auth0FromHook)

			if (
				window.location.search.includes("code=") &&
				window.location.search.includes("state=")
			) {
				const { appState } = await auth0FromHook.handleRedirectCallback()
				onRedirectCallback(appState)
			}

			const isAuthenticated = await auth0FromHook.isAuthenticated()

			setIsAuthenticated(isAuthenticated)

			if (isAuthenticated) {
				const user = await auth0FromHook.getUser()
				setUser(user)
				console.log("user qq :", user)

				localStorage.setItem(
					storageName,
					JSON.stringify({ user: user }),
					// JSON.stringify({
					// 	userId: user.nickname,
					// 	token: user.jwtToken,
					// 	userName: user.nickname,
					// 	avatar: user.picture,
					// }),
				)
			}
			setLoading(false)
		}
		initAuth0()
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(storageName))
		console.log("data :", data)

		if (data && data.token) {
			// eslint-disable-next-line
			login(data.token, data.userId, data.userName)
		}

		setLoading(true)
	}, [user])

	const loginWithPopup = useCallback(async (params = {}) => {
		console.log("params :", params)
		setPopupOpen(true)
		try {
			await auth0Client.loginWithPopup(params)
		} catch (error) {
			console.error(error)
		} finally {
			setPopupOpen(false)
		}
		const user = await auth0Client.getUser()
		setUser(user)
		setIsAuthenticated(true)

		localStorage.setItem(
			storageName,
			// JSON.stringify({ userId: id, token: jwtToken, userName: name }),
		)
	})

	const handleRedirectCallback = async () => {
		setLoading(true)
		await auth0Client.handleRedirectCallback()
		const user = await auth0Client.getUser()
		setLoading(false)
		setIsAuthenticated(true)
		setUser(user)
	}
	return (
		<Auth0Context.Provider
			value={{
				isAuthenticated,
				user,
				loading,
				popupOpen,
				loginWithPopup,
				handleRedirectCallback,
				getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
				loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
				getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
				getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
				logout: (...p) => {
					auth0Client.logout(...p)
					localStorage.removeItem(storageName)
				},
			}}
		>
			{children}
		</Auth0Context.Provider>
	)
}
