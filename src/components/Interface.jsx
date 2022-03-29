import Onboarding from "./Onboarding";
import Matching from "./Matching";
import Messaging from "./messages/Messaging";
import { useDispatch } from "react-redux";
import { types } from "../redux/types";
import { useSelector } from "react-redux";
import Footer from "./Footer/Footer";
import BypassOnboarding from "./BypassOnboarding/BypassOnboarding";
import Navbar from "./Navbar";

const Interface = (props) => {
  const dispatch = useDispatch();
  const screen = useSelector((state) => state.general.screen);
  const loggedIn = useSelector((state) => state.general.loggedIn);

  const onMessageUpdate = (payload) => {
    //do something useful
  };

  return (
    <>
      {screen === 0 ? null : <Navbar /> }
      {/* <Navbar /> */}

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
      <BypassOnboarding />
      <Footer />
    </>
  );
};

export default Interface;
