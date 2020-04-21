import React from "react"
import "./baselayout.sass"
import Navigation from "components/menu/Navigation/Navigation"
import TwitchAuth from "components/TwitchAuth/TwitchAuth"
import User from "components/header/User/User"

const BaseLayout = ({ children }) => {
	return (
		<div className="layout">
			<div className="layout__menu">
				<div className="layout__menu-logo">
					TWITCH<span>clone</span>
				</div>
				<div className="layout__menu-navigation">
					<Navigation />
				</div>
			</div>
			<div className="layout__content">
				<div className="layout__content-head">
					<div>
						<div>Search</div>
					</div>

					<div>
						<TwitchAuth />
						<User />
					</div>
				</div>
				<div className="layout__content-container">{children}</div>
			</div>
		</div>
	)
}

export default BaseLayout
