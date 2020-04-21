import { USER_PROFILE_LOADED } from "redux/actions/authActions"

const initialState = {
	auth: null,
}

export function authReducer(state = initialState, action) {
	switch (action.type) {
		case USER_PROFILE_LOADED:
			return {
				...state,
				auth: action.user,
			}
		default:
			return state
	}
}
