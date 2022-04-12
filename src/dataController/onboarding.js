import { API_URL } from "../config/general";
import { callAxios } from "./dynamicAxios";

export const callAPI = async (type, payload) => {
  switch (type) {
    case "ADD_USER":
      callAxios("post", API_URL + "/users", payload);
      break;

    case "GET_TOKEN":
      return await callAxios("post", API_URL + "/users/login", payload);


    default:
      break;
  }
};
