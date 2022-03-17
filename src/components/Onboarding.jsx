import Login from "./Onboarding/Login";
import Register from "./Onboarding/Register";
import { useState } from "react";
import "./Onboarding/onboarding.css";

const Onboarding = (props) => {
  const [loggedStatus, setLoggedStatus] = useState(false);
  const [onBoardingScreen, setOnBoardingScreen] = useState();

  const addNewUser = () => {
    // setState on users to add data
  };

  // console.log(loggedStatus);
  return (
    <>
      <p>Onboarding</p>
      <nav className="onBoarding">
        <button onClick={() => setOnBoardingScreen(0)}>Register</button>
        <button onClick={() => setOnBoardingScreen(1)}>Log In</button>
      </nav>
      <div>{onBoardingScreen === 0 && <Register users={props.users} />}</div>
      <div>
        {onBoardingScreen === 1 && (
          <Login users={props.users} setLoggedStatus={setLoggedStatus} />
        )}
      </div>
    </>
  );
};

export default Onboarding;
