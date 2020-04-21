import { all, call, put, takeLatest } from "redux-saga/effects"
import {
	HANDLE_AUTHENTICATION_CALLBACK,
	USER_PROFILE_LOADED,
} from "redux/actions/authActions"
import { handleAuthentication } from "Auth"

export function* parseHash() {
	const user = yield call(handleAuthentication)
	yield put({ type: USER_PROFILE_LOADED, user })
}

export function* handleAuthenticationCallback() {
	yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash)
}

export default function* authSaga() {
	yield all([handleAuthenticationCallback()])
}
