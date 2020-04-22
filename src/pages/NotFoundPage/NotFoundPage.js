import React from "react"
import "./notfoundpage.sass"
import { Link, useLocation } from "react-router-dom"

const NotFoundPage = () => {
	let location = useLocation()
	return (
		<div className="notFoundPage">
			<h1 className="notFoundPage__title">Oof, such page does not exist</h1>
			<h1 className="notFoundPage__title">
				<code>{location.pathname}</code>
			</h1>
			<Link to="/" className="button">
				Go home
			</Link>
		</div>
	)
}

export default NotFoundPage
