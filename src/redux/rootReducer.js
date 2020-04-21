import { combineReducers } from "redux"
import { appReducer } from "redux/appReducer"
import { authReducer } from "redux/reducers/authReducer"
import { userReducer } from "redux/user/userReducer"

export const rootReducer = combineReducers({
	app: appReducer,
	auth: authReducer,
	// user: userReducer,
})
