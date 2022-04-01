import Onboarding from "./Onboarding";
import Matching from "./Matching";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Footer from "./Footer/Footer";
import BypassOnboarding from "./BypassOnboarding/BypassOnboarding";
import Navbar from "./Navbar";
import Conversations from "./messages/Conversations";

const Interface = (props) => {
  const screen = useSelector((state) => state.general.screen);

  return (
    <>
      {screen === 0 ? null : <Navbar />}

      {screen === 0 && <Onboarding />}

      {screen === 1 && <Matching />}

      {screen === 2 && <Conversations />}

      <BypassOnboarding />
      <Footer />
    </>
  );
};

export default Interface;
