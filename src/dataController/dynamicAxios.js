import axios from "axios";

export const callAxios = async (method, url, payload) => {
	try {
		const result = await axios[method](url, payload);
		if (result.data.status === 0) {
			alert(result.data.error);
		}
		return result;
		console.log(result);
	} catch (error) {
		alert("API down");
	}
};
