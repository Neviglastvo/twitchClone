import React from "react"
import "./user.sass"
import { useAuth0 } from "components/TwitchAuth/react-auth0-spa"
import TwitchAuth from "components/TwitchAuth/TwitchAuth"

const User = () => {
	const { isAuthenticated, loading, user } = useAuth0()

	// console.log("useAuth0() :", useAuth0())

	if (!isAuthenticated || !user) {
		return <TwitchAuth />
	}

	return (
		<div className="user">
			<div className="user__container">
				<div
					className="user__avatar"
					style={{ backgroundImage: `url(${user.picture})` }}
				></div>
				<div className="user__username">{user.nickname}</div>
				<div className="user__icon"></div>
				<div className="user__dropdown">
					<div className="user__dropdown-item">
						<div className="user__dropdown-item-title">title</div>
					</div>
					<div className="user__dropdown-item">
						<div className="user__dropdown-item-title">title</div>
					</div>
					<div className="user__dropdown-item">
						<div className="user__dropdown-item-title">title</div>
					</div>
					<div className="user__dropdown-item">
						<div className="user__dropdown-item-title">title</div>
					</div>
					<div className="user__dropdown-item">
						<div className="user__dropdown-item-title">title</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default User

// user:
////given_name: "Roman"
////family_name: "Yakovenko"
////nickname: "paradiseseeker94"
////name: "Roman Yakovenko"
////picture: "https://lh3.googleusercontent.com/a-/AOh14GgdKjKKRfDStFIrWPnGxiyZUyXult3KJP0fYhQD"
////locale: "ru"
////updated_at: "2020-04-22T04:29:09.747Z"
////email: "paradiseseeker94@gmail.com"
////email_verified: true
////sub: "google-oauth2|116591965120651180740"
