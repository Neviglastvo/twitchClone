import { api } from "api/api"
import React, { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
import "./games.sass"

const Games = () => {
	const pageSize = 4

	const [games, setGames] = useState([])
	const [pageOffset, setPageOffset] = useState(0)

	const fetchTopGames = useCallback(async () => {
		const result = await api.get(
			`/games/top?limit=${pageSize}&offset=${pageOffset}`,
		)

		let topGames = result.data.top

		let finalArray = topGames.map((game) => {
			let newImage = game.game.box.template
				.replace("{width}", 1366)
				.replace("{height}", 1080)

			game.game.box.template = newImage
			return game
		})

		setGames(finalArray)
	}, [pageOffset])

	useEffect(() => {
		fetchTopGames()
	}, [fetchTopGames])

	const changePage = (value) => {
		setPageOffset(pageOffset + value)
	}

	return (
		<div className="games">
			<div className="games__container">
				{games &&
					games.map((item) => (
						<div className="games__item-wrapper" key={item.game._id}>
							<Link
								className="games__item"
								style={{
									backgroundImage: `url(${item.game.box.large})`,
								}}
								to={{
									pathname: `/games/${item.game.name}`,
									state: {
										all: item,
										gameID: item.game._id,
										bgImage: item.game.box.template,
										thumbImage: item.game.box.large,
										info: item.game,
									},
								}}
							>
								<div className="games__title">{item.game.name || <Skeleton />}</div>
								<div className="games__subtitle">{item.viewers || <Skeleton />}</div>
							</Link>
						</div>
					))}
			</div>

			<div className="games__actions">
				<div
					className={`games__action button ${pageOffset <= 0 ? "disabled" : null}`}
					onClick={() => changePage(-pageSize)}
					disabled={pageOffset <= 0}
				>
					{"<"}
				</div>
				<div className="games__action button" onClick={() => changePage(pageSize)}>
					{">"}
				</div>
			</div>
		</div>
	)
}

export default Games
// game:
// name: "League of Legends"
// _id: 21779
// giantbomb_id: 24024
// box:
// large: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x380.jpg"
// medium: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-136x190.jpg"
// small: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-52x72.jpg"
// template: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-{width}x{height}.jpg"
// __proto__: Object
// logo:
// large: "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-240x144.jpg"
// medium: "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-120x72.jpg"
// small: "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-60x36.jpg"
// template: "https://static-cdn.jtvnw.net/ttv-logoart/League%20of%20Legends-{width}x{height}.jpg"
// __proto__: Object
// localized_name: "League of Legends"
// locale: "ru-ua"
