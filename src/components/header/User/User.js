import React from "react"
import "./user.sass"
import { signIn, signOut } from "Auth"

const User = ({ auth }) => {
	console.log("auth :", auth)
	return (
		<>
			{!auth && <button onClick={signIn}>Login</button>}
			{auth && (
				<>
					<button onClick={signOut}>Logout</button>
					<div>
						<div src={auth.profile.picture} />
						{auth.profile.email}
					</div>
				</>
			)}
		</>
	)
}

export default User

// auth: authenticated: true
// idToken: ""
// profile: given_name: "Roman"
// family_name: "Yakovenko"
// nickname: "paradiseseeker94"
// name: "Roman Yakovenko"
// picture: "https://lh3.googleusercontent.com/a-/AOh14GgdKjKKRfDStFIrWPnGxiyZUyXult3KJP0fYhQD"
// locale: "ru"
// updated_at: "2020-04-21T06:34:15.236Z"
// email: "paradiseseeker94@gmail.com"
// email_verified: true
// iss: "https://nevejestvo.eu.auth0.com/"
// sub: "google-oauth2|116591965120651180740"
// aud: "2ZJxhsyNynJIDymj0h34rM657bL8flSe"
// iat: 1587450855
// exp: 1587486855
// nonce: "sE66ErHfLK9Ydj57i1~ukpi7YD0ljDoM"
// __proto__: Object
// expiresAt: 1587486855000
