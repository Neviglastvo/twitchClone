import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { handleAuthenticationCallback } from "redux/actions/authActions"
import history from "utils/history"

const mapStateToProps = (state) => {
	return {
		auth: state.user,
	}
}

let AuthCallback = ({ dispatch, auth }) => {
	if (auth) return history.push("/")
	dispatch(handleAuthenticationCallback())

	return <div className="text-center">Loading user profile.</div>
}
AuthCallback = connect(mapStateToProps)(AuthCallback)

export default AuthCallback
