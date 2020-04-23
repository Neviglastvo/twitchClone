import { api } from "api/api"
import React, { useCallback, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import "./streampage.sass"
import "./streamPageGame.sass"
import Skeleton from "react-loading-skeleton"
import moment from "moment"
import { Link } from "react-router-dom"

const StreamPage = ({ match, location }) => {
	console.log("location :", location)
	const [stream, setStream] = useState()
	const [chatVisible, setChatVisible] = useState(true)

	const currentGameFromProps = location.state.game.game
	const currentGameImage = currentGameFromProps.box.large
	const currentGameName = stream ? stream.game : ""

	const currentStream = location.state.stream
	const currentStreamViewers = currentStream.viewers
	console.log("currentGameFromProps :", currentGameFromProps)

	const sooqa = match.params.id

	const fetch = useCallback(async () => {
		const getChanelId = await api.get(`/users?login=${sooqa}`)

		if (getChanelId.data.users.length === 0) {
			return
		} else {
			const chanelId = getChanelId.data.users[0]._id
			const result = await api.get(`/channels/${chanelId}`)

			setStream(result.data)
		}

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

	const chatVisibilityToggler = () => {
		setChatVisible(!chatVisible)
	}

	return (
		<div className="streamPage">
			{/* <div
				className={`streamPage__bg ${stream && "loaded"}`}
				style={{ backgroundImage: `url(${stream ? stream.video_banner : ""})` }}
			></div> */}
			<img
				src={stream ? stream.video_banner : ""}
				alt=""
				className={`streamPage__bg ${stream && "loaded"}`}
			/>
			<div className="streamPage__container">
				<div className="streamPage__content">
					<div className="streamPage__streamer">
						{stream ? (
							<img
								className="streamPage__streamer-avatar"
								src={stream.logo}
								alt={stream.description}
							/>
						) : (
							<Skeleton />
						)}
						<div className="streamPage__streamer-box">
							{stream ? (
								<div className="streamPage__streamer-box-name">
									{stream.display_name}
								</div>
							) : (
								<Skeleton />
							)}
							{stream ? (
								<div className="streamPage__streamer-box-onlineTime">
									{moment(stream.updated_at, "YYYYMMDD").fromNow()}
								</div>
							) : (
								<Skeleton />
							)}
						</div>

						<div className="streamPage__streamer-actions">
							<button className="button button--small">follow</button>
							{!chatVisible && (
								<button
									className="streamPage__chatToggler button button--small"
									onClick={chatVisibilityToggler}
								>
									{"<"}
								</button>
							)}
						</div>
					</div>

					<div className="streamPage__video-container ">
						{!stream ? (
							<Skeleton height={"100%"} />
						) : (
							<ReactPlayer
								url={stream.url}
								// playing
								muted
								playsinline
								className="streamPage__video"
								width="100%"
								height="100%"
							/>
						)}
					</div>

					<div className="streamPageGame">
						{stream ? (
							<div className="streamPageGame__avatar-container">
								<img
									className="streamPageGame__avatar"
									src={currentGameImage}
									alt={currentGameName}
								/>
							</div>
						) : (
							<Skeleton />
						)}
						<div className="streamPageGame__container">
							<div className="streamPageGame__box">
								{stream ? (
									<div className="streamPageGame__streamerStatus">{stream.status}</div>
								) : (
									<Skeleton />
								)}
								{stream && currentStreamViewers ? (
									<div className="streamPageGame__currentOnline online">
										{currentStreamViewers}
									</div>
								) : (
									<Skeleton />
								)}
							</div>

							{stream && currentGameName ? (
								<Link
									className="streamPageGame__gameTitle"
									to={{
										pathname: `/games/${currentGameName}`,
									}}
								>
									{currentGameName}
								</Link>
							) : (
								<Skeleton />
							)}
							<div className="streamPageGame__tags">
								<div className="streamPageGame__tag"></div>
							</div>
						</div>
					</div>
				</div>

				<div className={`streamPage__chat ${chatVisible && "visible"}`}>
					{!stream ? (
						<Skeleton height={"100%"} />
					) : (
						<>
							<button
								className="streamPage__chatToggler streamPage__chatToggler--chat button button--small"
								onClick={chatVisibilityToggler}
							>
								>
							</button>
							<iframe
								title={stream.name}
								frameBorder="0"
								scrolling="no"
								id="chat_embed"
								// src={chatVisible && `https://www.twitch.tv/embed/${stream.name}/chat`}
								src={`https://www.twitch.tv/embed/${stream.name}/chat`}
							></iframe>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default StreamPage

// broadcaster_language: "en"
// broadcaster_software: "unknown_rtmp"
// broadcaster_type: "partner"
// created_at: "2014-12-04T03:13:38Z"
// description: "That famous Swedish guy that's not PewDiePie."
// display_name: "Anomaly"
// followers: 1894437
// game: "VALORANT"
// language: "en"
// logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/anomaly-profile_image-0be1a6abbc7a9f45-300x300.png"
// mature: false
// name: "anomaly"
// partner: true
// privacy_options_enabled: false
// private_video: false
// profile_banner: "https://static-cdn.jtvnw.net/jtv_user_pictures/17be744e-7025-44e3-82d1-827aa99b1dd0-profile_banner-480.png"
// profile_banner_background_color: null
// status: "24/7 DROPS STREAM ✔️ VOD HIGHLIGHT REEL (GLOBAL ELITE)"
// updated_at: "2020-04-23T04:50:00Z"
// url: "https://www.twitch.tv/anomaly"
// video_banner: "https://static-cdn.jtvnw.net/jtv_user_pictures/037e6764-0046-496e-9c66-fb08ca0a1c2c-channel_offline_image-1920x1080.png"
// views: 43844050
// _id: "76508554"
