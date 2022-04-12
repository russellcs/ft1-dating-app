import Interface from "./components/general/Interface";
import Title from "./components/general/Title";
import { useDispatch } from "react-redux";
import { types } from "./redux/types/types";
import { useSelector } from "react-redux";
import { callAPI as matchingCallAPI } from "./dataController/matching";
import { callAPI as messagingCallAPI } from "./dataController/messages";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.general.loggedIn);
  const currentUserId = useSelector((state) => state.general.currentUserId);

  useEffect(() => {
    if (currentUserId) getInitialData();
  }, [currentUserId]);

  const getInitialData = async () => {
    const messages = await messagingCallAPI(types.GET_USER_MESSAGES, {
      userId: currentUserId,
    });
    const users = await matchingCallAPI(types.GET_ALL_USERS);
    // console.log(messages, users)

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

  // return
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Clear localStorage
      </button>

      {loggedIn === true && (
        <button
          className="btn log-out "
          style={{ float: "right" }}
          onClick={() => {
            dispatch({ type: types.LOG_OUT });
          }}
        >
          Log Out
        </button>
      )}
      <Title />
      <Interface />
    </>
  );
};

export default App;
