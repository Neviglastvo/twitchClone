import axios from "axios"

export const api = axios.create({
	baseURL: "https://api.twitch.tv/kraken",
	headers: {
		Accept: "application/vnd.twitchtv.v5+json",
		"Client-ID": "o1ip5xetf96m5u74obrgwpp4127ptj",
	},
})
