import React from "react"
import "./profilepage.sass"
import { useAuth0 } from "components/TwitchAuth/react-auth0-spa"

const ProfilePage = () => {
	const { loading, user } = useAuth0()

	if (loading || !user) {
		return <div>Loading...</div>
	}

	return (
		<>
			<img src={user.picture} alt="Profile" />

			<h2>{user.name}</h2>
			<p>{user.email}</p>
			<code>{JSON.stringify(user, null, 2)}</code>
		</>
	)
}

export default ProfilePage
