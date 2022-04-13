import { API_URL } from "../config/general";
import { callAxios } from "./dynamicAxios";
import { types } from "../redux/types/types";

export const callAPI = async (type, payload, headers) => {
  console.log(type, payload, headers);

  switch (type) {
    case types.BLOCK_USER:
      callAxios("post", API_URL + "/messages/blocked", {
        user_id: payload.userId,
        foreign_id: payload.foreignId,
      });
      break;

    case types.ADD_MESSAGE:
      callAxios("post", API_URL + "/messages", {
        user_id: payload.userId,
        foreign_id: payload.foreignId,
        content: payload.content,
      });
      break;

    case types.DELETE_MESSAGE:
      callAxios("delete", API_URL + "/messages/" + payload.messageId);
      break;

    case types.GET_USER_MESSAGES:
      console.log(payload, headers);
      const result = await callAxios(
        "get",
        API_URL + "/messages/" + payload.userId,
        { headers: { token: headers.token } }
      );
      return result;

    default:
      console.log("the default occurred in messages");
      break;
  }
};
