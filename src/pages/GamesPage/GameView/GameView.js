import React, { useEffect, useCallback, useState } from "react"
import "./gameview.sass"
import { api } from "api/api"
import { Link } from "react-router-dom"

const GameView = (props) => {
	const { match, location } = props

	const game = location.state.info
	const gameName = game.name
	const gameId = location.state.gameID

	const pageSize = 12

	const [streams, setStreams] = useState([])
	const [pageOffset, setPageOffset] = useState(0)

	const fetchStreamsByGame = useCallback(
		async (offset) => {
			const result = await api.get(
				`/streams/?game=${gameName}&limit=9&offset=${offset}`,
			)

			let array = result.data.streams

			// let finalArray = array.map((game) => {
			// 	let newImage = game.game.box.template
			// 		.replace("{width}", 1366)
			// 		.replace("{height}", 1080)

			// 	game.game.box.template = newImage
			// 	return game
			// })

			setStreams(array)
		},
		[gameName],
	)

	useEffect(() => {
		fetchStreamsByGame(pageOffset)
	}, [fetchStreamsByGame, pageOffset])

	useEffect(() => {
		console.log("streams :", streams)
	}, [streams])

	const changePage = (value) => {
		setPageOffset(pageOffset + value)
	}

	return (
		<div className="game">
			<div
				className="game__bg"
				style={{ backgroundImage: `url(${location.state.bgImage})` }}
			></div>
			<div className="game__container">
				<div className="game__title-container">
					<div className="game__title">{gameName}</div>
					<div className="game__subtitle"></div>
				</div>
				<div className="game__list">
					<div className="game__list-container">
						{streams.map((item) => (
							<div className="game__list-item" key={`/${item.channel.name}`}>
								{console.log("item", item)}
								<Link
									className="game__item"
									to={{
										pathname: `/${item.channel.name}`,
										state: {
											channelID: item.channel._id,
											info: item.channel,
											// bgImage: item.game.box.template,
										},
									}}
									style={{
										backgroundImage: `url(${item.preview.medium})`,
									}}
								>
									<div className="game__item-container">
										<div className="game__item-title">{item.channel.display_name}</div>
										<div className="game__item-viewers online">{item.viewers}</div>
										<div
											className="game__item-logo"
											styles={{ backgroundImage: `url(${item.channel.logo})` }}
										></div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className="game__actions">
					<div
						className={`game__action button ${pageOffset <= 0 ? "disabled" : null}`}
						onClick={() => changePage(-pageSize)}
						disabled={pageOffset <= 0}
					>
						{"<"}
					</div>
					<div className="game__action button" onClick={() => changePage(pageSize)}>
						{">"}
					</div>
				</div>
			</div>
		</div>
	)
}

export default GameView

// channel: mature: false
// status: "PONCE - De la culture et du plaisir !motg !youtube"
// broadcaster_language: "fr"
// broadcaster_software: ""
// display_name: "Ponce"
// game: "Just Chatting"
// language: "fr"
// _id: 50597026
// name: "ponce"
// created_at: "2013-10-24T19:04:45.512189Z"
// updated_at: "2020-04-06T12:05:19.780557Z"
// partner: true
// logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/125bbc49-45d1-432c-92b3-f5aef1e7ab21-profile_image-300x300.png"
// video_banner: "https://static-cdn.jtvnw.net/jtv_user_pictures/62c1d623-37e8-4a86-9a1c-566e94479204-channel_offline_image-1920x1080.png"
// profile_banner: "https://static-cdn.jtvnw.net/jtv_user_pictures/671bf968-f68e-470a-b0f0-e88feef62bef-profile_banner-480.png"
// profile_banner_background_color: ""
// url: "https://www.twitch.tv/ponce"
// views: 5959899
// followers: 126949
// broadcaster_type: ""
// description: "On se tape des immenses barres."
// private_video: false
// privacy_options_enabled: false

// gameID: 509658
// bgImage: "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-1366x1080.jpg"
// info:
// name: "Just Chatting"
// _id: 509658
// giantbomb_id: 0
// box: {large: "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-272x380.jpg", medium: "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-136x190.jpg", small: "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-52x72.jpg", template: "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-1366x1080.jpg"}
// logo: {large: "https://static-cdn.jtvnw.net/ttv-logoart/Just%20Chatting-240x144.jpg", medium: "https://static-cdn.jtvnw.net/ttv-logoart/Just%20Chatting-120x72.jpg", small: "https://static-cdn.jtvnw.net/ttv-logoart/Just%20Chatting-60x36.jpg", template: "https://static-cdn.jtvnw.net/ttv-logoart/Just%20Chatting-{width}x{height}.jpg"}
// localized_name: "Just Chatting"

// _id: 1101603137
// game: "Counter-Strike: Global Offensive"
// broadcast_platform: "live"
// community_id: ""
// community_ids: []
// viewers: 20536
// video_height: 1080
// average_fps: 59
// delay: 0
// created_at: "2020-04-06T11:49:12Z"
// is_playlist: false
// stream_type: "live"
// preview: {small: "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_csgo-80x45.jpg", medium: "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_csgo-320x180.jpg", large: "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_csgo-640x360.jpg", template: "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_csgo-{width}x{height}.jpg"}
// channel: {mature: false, status: "LIVE: Astralis vs Fnatic - ESL Pro League Season 11", broadcaster_language: "en", broadcaster_software: "", display_name: "ESL_CSGO", …}
