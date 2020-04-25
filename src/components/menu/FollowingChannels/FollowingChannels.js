import React, { useState, useCallback, useEffect } from "react"
import "./followingchannels.sass"
import { api } from "api/api"
import { useAuth0 } from "components/TwitchAuth/react-auth0-spa"

const FollowingChannels = () => {
	const { loading, user } = useAuth0()

	console.log("user :>> ", user)

	const username = user.nickname

	const [followedChannels, setFollowedChannels] = useState([])

	const fetchFollowedChannels = useCallback(async () => {
		const user = await api.get(`/users?login=Nevejestvo`)
		const user2 = await api.get(`/users?login=${username}`)

		console.log("user2", user2)

		const userId = user.data.users[0]._id
		const followedChannels = await api.get(`/users/${userId}/follows/channels`)

		setFollowedChannels(followedChannels.data.follows)
	}, [username])

	useEffect(() => {
		console.log("followedChannels :", followedChannels)
	}, [followedChannels])

	useEffect(() => {
		fetchFollowedChannels()
	}, [fetchFollowedChannels])

	if (!user) {
		return <div>Login pls</div>
	}

	return <div>I am FollowingChannels component</div>
}

export default FollowingChannels

// channel:
// broadcaster_language: "ru"
// broadcaster_software: "unknown_rtmp"
// broadcaster_type: "partner"
// created_at: "2013-01-09T03:28:18Z"
// description: "Danil "Dendi" Ishutin"
// display_name: "Dendi"
// followers: 689248
// game: "Dota 2"
// language: "ru"
// logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/ddea90c7-87af-49f2-b8a6-6b2d5ef6c0e3-profile_image-300x300.png"
// mature: false
// name: "dendi"
// partner: true
// privacy_options_enabled: false
// private_video: false
// profile_banner: "https://static-cdn.jtvnw.net/jtv_user_pictures/db85cd6e-4b35-48ba-be60-2ad5eb2ec962-profile_banner-480.jpeg"
// profile_banner_background_color: null
// status: "Играем пати с Давидом и Котишом Бэдплеей и Яной https://www.twitch.tv/davaonline"
// updated_at: "2020-04-24T07:38:14Z"
// url: "https://www.twitch.tv/dendi"
// video_banner: "https://static-cdn.jtvnw.net/jtv_user_pictures/45cb23f3-491e-4e51-ab20-7cd03bc3fd5b-channel_offline_image-1920x1080.jpeg"
// views: 56523809
// _id: "39176440"
