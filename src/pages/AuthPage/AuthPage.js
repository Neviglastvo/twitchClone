import React from "react"

import "./authpage.sass"
import TwitchAuth from "components/TwitchAuth/TwitchAuth"
import { Link } from "react-router-dom"

const AuthPage = (props) => {
	return (
		<div className="auth">
			<div className="auth__bg"></div>
			<div className="auth__form-container">
				<TwitchAuth />
				<div
					className="button auth__button"
					onClick={(event) => props.history.goBack()}
				>
					Go Back
				</div>
				<Link to="/">Home</Link>
			</div>
		</div>
	)
}

export default AuthPage
