import { connect } from "react-redux"
import User from "components/header/User/User"
import ProfilePage2 from "pages/AuthPage/ProfilePage2/ProfilePage2"

const mapStateToProps = (state) => {
	return {
		auth: state.auth.auth,
	}
}

const UserContainer = connect(mapStateToProps)(User)

export default UserContainer
