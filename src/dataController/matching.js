import { API_URL } from "../config/general";
import { callAxios } from "./dynamicAxios";

export const callAPI = async (type, payload) => {
  switch (type) {
    case "ADD_TO_SEEN":
      callAxios("post", API_URL + "/matching/seen", {
        user_id: payload.userId,
        foreign_id: payload.foreignUserId,
      });
      break;

    case "ADD_TO_LIKES":
      callAxios("post", API_URL + "/matching/likes", {
        user_id: payload.userId,
        foreign_id: payload.foreignUserId,
      });
      break;

    default:
      break;
  }
};
