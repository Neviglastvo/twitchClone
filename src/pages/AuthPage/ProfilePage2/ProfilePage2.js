import React from "react"
import "./profilepage.sass"
import { useAuth0 } from "components/TwitchAuth/react-auth0-spa"

const ProfilePage2 = ({ auth }) => {
	const { loading, user } = useAuth0()

	console.log("auth ProfilePage2 :", auth)

	if (loading || !auth) {
		return <div>Loading...</div>
	}

	return (
		<>
			<img src={auth.picture} alt="Profile" />

			<h2>{auth.name}</h2>
			<p>{auth.email}</p>
			<code>{JSON.stringify(auth, null, 2)}</code>
		</>
	)
}

export default ProfilePage2
