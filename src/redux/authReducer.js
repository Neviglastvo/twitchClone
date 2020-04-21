// import {
// 	USER_LOADING,
// 	USER_LOADED,
// 	LOGIN_SUCCESS,
// 	AUTH_FAIL,
// 	LOGIN_FAIL,
// 	LOGOUT_SUCCESS,
// } from "redux/types"

// const initialState = {
// 	token: localStorage.getItem("token"),
// 	isAuth: false,
// 	isLoading: false,
// 	user: null,
// }

// export const authReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case USER_LOADING:
// 			return {
// 				...state,
// 				isLoading: true,
// 			}

// 		case USER_LOADED:
// 			return {
// 				...state,
// 				isLoading: false,
// 				user: action.payload,
// 			}

// 		case LOGIN_SUCCESS:
// 			return {
// 				...state,
// 				...action.payload,
// 				isAuth: true,
// 				isLoading: false,
// 			}

// 		case AUTH_FAIL:
// 		case LOGIN_FAIL:
// 		case LOGOUT_SUCCESS:
// 			localStorage.removeItem("token")
// 			return initialState

// 		default:
// 			return state
// 	}
// }

// // import { SIGN_IN, SIGN_OUT } from "redux/types"

// // const initialState = {
// // 	isSignedIn: null,
// // 	userId: null,
// // }

// // export const authReducer = (state = initialState, action) => {
// // 	switch (action.type) {
// // 		case SIGN_IN:
// // 			return { ...state, isSignedIn: true, userId: action.payload }
// // 		case SIGN_OUT:
// // 			return { ...state, isSignedIn: false, userId: null }
// // 		default:
// // 			return state
// // 	}
// // }
