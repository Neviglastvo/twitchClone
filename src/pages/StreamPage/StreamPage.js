import { api } from "api/api"
import React, { useCallback, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import "./streampage.sass"

const StreamPage = (props) => {
	const { match, location } = props

	console.log("location :", location)

	// const channel = location.state.info
	// const channelName = channel.name
	const channelId = props.location.state.channelID

	const [stream, setStream] = useState([])

	const fetch = useCallback(async () => {
		const result = await api.get(`/channels/${channelId}`)

		console.log("result :", result)
		let array = result.data

		// let finalArray = array.map((game) => {
		// 	let newImage = game.game.box.template
		// 		.replace("{width}", 1366)
		// 		.replace("{height}", 1080)

		// 	game.game.box.template = newImage
		// 	return game
		// })

		setStream(array)
	}, [channelId])

	useEffect(() => {
		fetch()
	}, [fetch])

	useEffect(() => {
		console.log("stream :", stream)
	}, [stream])

	return (
		<div className="streamPage">
			<div className="streamPage__content">
				<ReactPlayer
					url={stream.url}
					playing
					playsinline
					className="streamPage__video"
					width="auto"
					height="auto"
				/>
				<div className="streamPage__info"></div>
			</div>
			<div className="streamPage__chat">
				<iframe
					title={stream.name}
					frameBorder="0"
					scrolling="no"
					id="chat_embed"
					src={`https://www.twitch.tv/embed/${stream.name}/chat`}
				></iframe>
			</div>
		</div>
	)
}

export default StreamPage

// channels / 44322889
