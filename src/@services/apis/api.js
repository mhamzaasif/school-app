import Axios from "axios";

const api = (endpoint, data) => {
	endpoint.data = data; // mutation should be avoided
	switch (endpoint.type) {
		case "POST":
		case "post":
		case "Post":
			return axiosPOST(endpoint);
		case "GET":
		case "get":
		case "Get":
			return axiosGET(endpoint);
		default:
			return;
	}
};

export const axiosPOST = async ({
	address: route,
	data,
	guarded: isGuarded,
	testData,
}) => {
	if (process.env.REACT_APP_API_MODE === "mock") {
		if (testData) return await mockAPI(testData);
	}
	try {
		return await Axios.post(
			route,
			data,
			isGuarded
				? {
						headers: {
							Authorization: `Bearer ${
								JSON.parse(sessionStorage.getItem("user")).token
							}`,
						},
				  }
				: null
		);
	} catch (error) {
		console.error("[API post request error]", error);
	}
};

export const axiosGET = async ({
	address: route,
	data,
	guarded: isGuarded,
	testData,
}) => {
	if (process.env.REACT_APP_API_MODE === "mock") {
		console.log("[making mock api call]");
		if (testData) return await mockAPI(testData);
	}
	try {
		return Axios.get(
			route,
			isGuarded
				? {
						headers: {
							Authorization: `Bearer ${
								JSON.parse(sessionStorage.getItem("user")).token
							}`,
						},
				  }
				: null
		);
	} catch (error) {
		console.log("[Error in getting message]", error);
	}
};

const mockAPI = (data) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ data });
		}, 1000);
	});

export default api;
