import React from "react"
import { useAuth0 } from "components/TwitchAuth/react-auth0-spa"
import "./twitchauth.sass"

const TwitchAuth = () => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

	// console.log("isAuthenticated :", isAuthenticated)

	return (
		<>
			{!isAuthenticated && (
				<button className="button" onClick={() => loginWithRedirect({})}>
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
