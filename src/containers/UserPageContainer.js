import { connect } from "react-redux"
import User from "components/header/User/User"
import ProfilePage2 from "pages/AuthPage/ProfilePage2/ProfilePage2"

const mapStateToProps = (state) => {
	return {
		auth: state.auth.auth,
	}
}

const UserPageContainer = connect(mapStateToProps)(ProfilePage2)

export default UserPageContainer
