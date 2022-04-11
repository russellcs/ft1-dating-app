import Interface from "./components/general/Interface";
import Title from "./components/general/Title";
import { useDispatch } from "react-redux";
import { types } from "./redux/types/types";
import { useSelector } from "react-redux";
import { callAPI as matchingCallAPI } from "./dataController/matching";
import { callAPI as messagingCallAPI } from "./dataController/messages";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.general.loggedIn);

  const getInitialData = async () => {
    // await messagingCallAPI(types.GET_USER_MESSAGES, { userId: 1 });
    const userData = await matchingCallAPI(types.GET_ALL_USERS);

	// dispatch({type: types.})

    console.log("userdata", userData);
  };

  getInitialData();

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
