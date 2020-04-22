import { api } from "api/api"
import React, { useCallback, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import "./streampage.sass"
import Skeleton from "react-loading-skeleton"

const StreamPage = ({ match, location }, props) => {
	// const channel = location.state.info
	// const channelName = channel.name
	console.log("match :", match)

	const sooqa = match.params.id
	console.log("location :", location)
	const [stream, setStream] = useState()
	let chanelId = location.state || null

	const fetch = useCallback(async () => {
		// if (chanelId) {
		// 	result = await api.get(`/channels/${chanelId}`)
		// } else {
		const chanelIdFromUsername = location.pathname.slice(1)
		const getChanelId = await api.get(`/users?login=${sooqa}`)

		console.log("getChanelId :", getChanelId)

		if (getChanelId.data.users.length === 0) {
			return
		} else {
			chanelId = getChanelId.data.users[0]._id
			const result = await api.get(`/channels/${chanelId}`)

			const array = result.data

			setStream(array)
		}
		// }

		// let finalArray = array.map((game) => {
		// 	let newImage = game.game.box.template
		// 		.replace("{width}", 1366)
		// 		.replace("{height}", 1080)

		// 	game.game.box.template = newImage
		// 	return game
		// })

		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		fetch()
	}, [fetch])

	useEffect(() => {
		console.log("stream :", stream)
	}, [stream])

	return (
		<div className="streamPage">
			<>
				<div className="streamPage__content">
					<div className="streamPage__video-container ">
						{!stream ? (
							<Skeleton height={"100%"} />
						) : (
							<ReactPlayer
								url={stream.url}
								playing
								playsinline
								className="streamPage__video"
								width="100%"
								height="100%"
							/>
						)}
					</div>

					<div className="streamPage__info"></div>
				</div>
				<div className="streamPage__chat">
					{!stream ? (
						<Skeleton height={"100%"} />
					) : (
						<iframe
							title={stream.name}
							frameBorder="0"
							scrolling="no"
							id="chat_embed"
							src={`https://www.twitch.tv/embed/${stream.name}/chat`}
						></iframe>
					)}
				</div>
			</>
		</div>
	)
}

export default StreamPage

// channels / 44322889
// {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
// data:
// _total: 1
// users: Array(1)
// 0:
// display_name: "Elajjaz"
// _id: "26921830"
// name: "elajjaz"
// type: "user"
// bio: "Never late, always deathless."
// created_at: "2011-12-20T12:13:21.05282Z"
// updated_at: "2020-04-22T01:50:21.599724Z"
// logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/elajjaz-profile_image-fcfc55e0804b6bfd-300x300.png"
// __proto__: Object
// length: 1
