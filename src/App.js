import Interface from "./components/general/Interface";
import Title from "./components/general/Title";
import { useDispatch } from "react-redux";
import { types } from "./redux/types/types";
import { useSelector } from "react-redux";
import { callAPI as matchingCallAPI } from "./dataController/matching";
import { callAPI as messagingCallAPI } from "./dataController/messages";
import "./App.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.general.currentUserId);
  const token = useSelector((state) => state.general.token);

  // gets initial data from database once user has logged in and has a token
  useEffect(() => {
    if (currentUserId) {
      getInitialData();
    }
  }, [currentUserId, token]);

  const getInitialData = async () => {
    const messages = await messagingCallAPI(
      types.GET_USER_MESSAGES,
      {},
      { token }
    );
    const users = await matchingCallAPI(types.GET_ALL_USERS);

    if (messages.data.status && users.data.status) {
      dispatch({
        type: types.SET_ALL_USERS,
        payload: users.data.payload,
      });
      dispatch({
        type: types.SET_ALL_MESSAGES,
        payload: messages.data.payload,
      });
    } else {
      alert("something has gone wrong with the back end!");
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Title />
      <Interface />
    </>
  );
};

export default App;
