import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import "./Onboarding/onboarding.css";

const Onboarding = (props) => {
  // const [loggedStatus, setLoggedStatus] = useState(false);
  const [onBoardingScreen, setOnBoardingScreen] = useState();
  return (
    <>
      <p>Onboarding</p>
      <nav className="onBoarding">
        <button onClick={() => setOnBoardingScreen(0)}>Register</button>
        <button onClick={() => setOnBoardingScreen(1)}>Log In</button>
      </nav>
      <div>{onBoardingScreen === 0 && <Register users={props.users} />}</div>
      <div>{onBoardingScreen === 1 && <Login users={props.users} />}</div>
    </>
  );
};

export default Onboarding;
