import { HIDE_LOADER, SHOW_LOADER, SIGN_IN, SIGN_OUT } from "redux/types"

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	}
}

export const signOut = () => {
	return {
		type: SIGN_OUT,
	}
}

export function showLoader() {
	return {
		type: SHOW_LOADER,
	}
}

export function hideLoader() {
	return {
		type: HIDE_LOADER,
	}
}
