import axios from "axios";

export const callAxios = async (method, url, body, headers) => {
  try {
    const result = await axios[method](url, body, headers);
    // if (result.data.status === 0) {
    // 	alert(result.data.error);
    // }
    return result;
  } catch (error) {
    alert("Sorry, the server is experiencing high load");
  }
};
