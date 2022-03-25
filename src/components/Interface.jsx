import Onboarding from "./Onboarding";
import Matching from "./Matching";
import Messaging from "./messages/Messaging";
import { useDispatch } from "react-redux";
import { types } from "../redux/types";
import { useSelector } from "react-redux";

const Interface = (props) => {
  const dispatch = useDispatch();
  const screen = useSelector((state) => state.general.screen);

  const onMessageUpdate = (payload) => {
    //do something useful
  };

  return (
    <>
      <nav className="nav nav-pills flex-column flex-sm-row bg-light">
        <button className="nav-link"
          onClick={() => dispatch({ type: types.SET_SCREEN, payload: 0 })}
        >
          Onboarding
        </button>
        <button className="nav-link"
          onClick={() => dispatch({ type: types.SET_SCREEN, payload: 1 })}
        >
          Matches
        </button>

        <button className="nav-link"
          onClick={() => dispatch({ type: types.SET_SCREEN, payload: 2 })}
        >
          Messages
        </button>
      </nav>

      {screen === 0 && (
        <Onboarding
          addUser={props.addUser}
          newUserId={props.newUserId}
          // setScreen={setScreen} to be changed
        />
      )}

      {screen === 1 && <Matching />}

      {screen === 2 && (
        <Messaging
          messages={props.messages}
          onMessageUpdate={onMessageUpdate}
          addMessage={props.addMessage}
          blockUserId={props.blockUserId}
          deleteMessage={props.deleteMessage}
        />
      )}
    </>
  );
};

export default Interface;
