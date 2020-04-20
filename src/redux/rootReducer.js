import { combineReducers } from "redux"
// import { pcsReducer } from "redux/pcsReducer"
import { appReducer } from "redux/appReducer"
import { authReducer } from "redux/authReducer"
// import { componentsReducer } from "redux/componentsReducer"

export const rootReducer = combineReducers({
	app: appReducer,
	auth: authReducer,
})
