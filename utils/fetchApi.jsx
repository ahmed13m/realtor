import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Host": "bayut.p.rapidapi.com",
			"X-RapidAPI-Key": "7aa95875c2msh57adbfe9165efb2p191c4djsn4dde8abf645f",
		},
	});
	return data;
};
