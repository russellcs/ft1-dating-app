import { API_URL } from "../config/general";
import { callAxios } from "./dynamicAxios";
import { types } from "../redux/types/types";

export const callAPI = async (type, payload) => {
  switch (type) {
    case types.ADD_USER:
      callAxios("post", API_URL + "/users", payload);
      break;

    case types.GET_TOKEN:
      return await callAxios("post", API_URL + "/users/login", payload);

    case types.DELETE_TOKEN:
      callAxios("delete", API_URL + "/users/logout/" + payload);
      break;

    default:
      break;
  }
};
