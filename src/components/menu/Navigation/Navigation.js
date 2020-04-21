import GoogleAuth from "components/GoogleAuth/GoogleAuth"
import React from "react"
import { NavLink } from "react-router-dom"
import "./navigation.sass"

const Navigation = () => {
	return (
		<ul className="navigation">
			<NavLink className="navigation__item" to="/" exact={true}>
				Home
			</NavLink>
			<NavLink className="navigation__item" to="/games">
				Games
			</NavLink>
			<NavLink className="navigation__item" to="/auth">
				Auth
			</NavLink>

			<NavLink className="navigation__item" to="/profile">
				Profile
			</NavLink>

			<NavLink className="navigation__item" to="/profile2">
				Profile2
			</NavLink>

			{/* <GoogleAuth className="navigation__item navigation__item--google" /> */}
		</ul>
	)
}

export default Navigation
