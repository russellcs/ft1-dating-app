import { API_URL } from "../config/general";
import { callAxios } from "./dynamicAxios";

export const callAPI = async (type, payload, headers) => {

  switch (type) {
    case "BLOCK_USER":
      callAxios("post", API_URL + "/messages/blocked", {
        user_id: payload.userId,
        foreign_id: payload.foreignId,
      });
      break;

    case "ADD_MESSAGE":
      callAxios("post", API_URL + "/messages", {
        user_id: payload.userId,
        foreign_id: payload.foreignId,
        content: payload.content,
      });
      break;

    case "DELETE_MESSAGE":
      callAxios("delete", API_URL + "/messages/" + payload.messageId);
      break;

    case "GET_USER_MESSAGES":
      const result = await callAxios(
        "get",
        API_URL + "/messages",
        { headers: { token: headers.token } }
      );
      return result;

    default:
      console.log("the default occurred in messages");
      break;
  }
};
