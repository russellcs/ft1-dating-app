import Onboarding from "../onboarding/Onboarding";
import Matching from "../matching/Matching";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import BypassOnboarding from "../bypassOnboarding/BypassOnboarding";
import Navbar from "./Navbar";
import Conversations from "../messages/Conversations";

const Interface = () => {
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
