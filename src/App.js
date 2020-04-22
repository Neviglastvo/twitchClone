import AuthLayout from "layouts/AuthLayout/AuthLayout"
import BaseLayout from "layouts/BaseLayout/BaseLayout"
import AuthPage from "pages/AuthPage/AuthPage"
import GamesPage from "pages/GamesPage/GamesPage"
import GameView from "pages/GamesPage/GameView/GameView"
import HomePage from "pages/HomePage/HomePage"
import StreamPage from "pages/StreamPage/StreamPage"
import React from "react"
import { Switch, BrowserRouter } from "react-router-dom"
import { PublicRoute, PrivateRoute } from "router"
import ProfilePage from "pages/AuthPage/ProfilePage/ProfilePage"
import NotFoundPage from "pages/NotFoundPage/NotFoundPage"
import LandingLayout from "layouts/LandingLayout/LandingLayout"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoute path="/" exact component={HomePage} layout={BaseLayout} />
				<PublicRoute path="/auth" component={AuthPage} layout={AuthLayout} />
				<PrivateRoute path="/profile" component={ProfilePage} layout={BaseLayout} />
				<PublicRoute
					path="/games"
					exact
					component={GamesPage}
					layout={BaseLayout}
				/>
				<PublicRoute
					path="/games/:id"
					exact
					component={GameView}
					layout={BaseLayout}
				/>
				<PublicRoute path="/:id" exact component={StreamPage} layout={BaseLayout} />
				{/* <Redirect to="/" /> */}
				{/* <PublicRoute path="*" component={NotFoundPage} layout={LandingLayout} /> */}
			</Switch>
		</BrowserRouter>
	)
}

export default App
