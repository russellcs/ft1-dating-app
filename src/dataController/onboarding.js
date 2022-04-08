import { API_URL } from "../config/general";
import { callAxios } from "./dynamicAxios";

export const callAPI = async (type, payload) => {
  switch (type) {
    case "ADD_USER":
      callAxios("post", API_URL + "/users", payload);
      break;

    case "ADD_SELFIE":
      callAxios("post", API_URL + "/users/selfie", payload);
      break;

    default:
      break;
  }
};
