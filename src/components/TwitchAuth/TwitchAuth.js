import React from "react"
import { useAuth0 } from "components/TwitchAuth/react-auth0-spa"
import "./twitchauth.sass"

const TwitchAuth = () => {
	const { isAuthenticated, loginWithPopup, logout } = useAuth0()

	// console.log("isAuthenticated :", isAuthenticated)

	return (
		<>
			{!isAuthenticated && (
				<button className="button" onClick={() => loginWithPopup({})}>
					Log in
				</button>
			)}
			{isAuthenticated && (
				<button className="button" onClick={() => logout()}>
					Log out
				</button>
			)}
		</>
	)
}

export default TwitchAuth
