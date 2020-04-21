import { userConstants } from "redux/user/userConstants"

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = userConstants

let user = JSON.parse(localStorage.getItem("user"))
const initialState = user ? { loggedIn: true, user } : {}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case userConstants.LOGIN_REQUEST:
			return {
				loggingIn: true,
				user: action.user,
			}
		case userConstants.LOGIN_SUCCESS:
			return {
				loggedIn: true,
				user: action.user,
			}
		case userConstants.LOGIN_FAILURE:
			return {}
		case userConstants.LOGOUT:
			return {}
		default:
			return state
	}
}

// import { SIGN_IN, SIGN_OUT } from "redux/types"

// const initialState = {
// 	isSignedIn: null,
// 	userId: null,
// }

// export const authReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case SIGN_IN:
// 			return { ...state, isSignedIn: true, userId: action.payload }
// 		case SIGN_OUT:
// 			return { ...state, isSignedIn: false, userId: null }
// 		default:
// 			return state
// 	}
// }
