import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

const Onboarding = (props) => {
  // const [loggedStatus, setLoggedStatus] = useState(false);
  return (
    <>
      <p>Onboarding</p>
      <div>
        <Register users={props.users} />
      </div>
      <div>
        <Login users={props.users} />
      </div>
    </>
  );
};

export default Onboarding;
