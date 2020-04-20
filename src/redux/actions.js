import {
	FETCH_PCS,
	HIDE_LOADER,
	SHOW_LOADER,
	SIGN_IN,
	SIGN_OUT,
} from "redux/types"

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

export function fetchPcs() {
	return async (dispatch) => {
		try {
			// dispatch(showLoader())
			const response = await fetch("/api/pc")
			const json = await response.json()
			setTimeout(() => {
				dispatch({ type: FETCH_PCS, payload: json })
				// dispatch(hideLoader())
			}, 500)
		} catch (error) {
			console.log("error", error)
			// dispatch(showAlert("Что-то пошло не так"))
			// dispatch(hideLoader())
		}
	}
}
