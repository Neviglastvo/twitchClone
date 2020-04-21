import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { useAuth0 } from "components/TwitchAuth/react-auth0-spa"

export const PublicRoute = ({
	component: Component,
	layout: Layout,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	)
}

export const PrivateRoute = ({
	component: Component,
	layout: Layout,
	path,
	...rest
}) => {
	const { loading, isAuthenticated, loginWithRedirect } = useAuth0()

	useEffect(() => {
		if (loading || isAuthenticated) {
			return
		}
		const fn = async () => {
			await loginWithRedirect({
				appState: { targetUrl: window.location.pathname },
			})
		}
		fn()
	}, [loading, isAuthenticated, loginWithRedirect, path])

	const render = (props) =>
		isAuthenticated === true ? (
			<Layout>
				<Component {...props} />
			</Layout>
		) : null

	return <Route path={path} render={render} {...rest} />
	// return <Route path={path} render={render} {...rest} />
}
