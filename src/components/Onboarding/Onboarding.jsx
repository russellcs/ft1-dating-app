import Login from "./Login";
import Register from "./Register";
import "./onboarding.css";
import { types } from "../../redux/types/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import Motto from "./Motto";

const Onboarding = (props) => {
  const dispatch = useDispatch();
  const screen = useSelector((state) => state.onboarding.screen);

  //gsap on buttons
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "rgb(36,157,61)",
      fontWeight: "bold",
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "rgb(247, 248, 249)",
      fontWeight: "400",
    });
  };

  return (
    <>
      <div>
        <nav className="onBoarding">
          <button
            className="btn btn-outline-dark register_btn"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onClick={() =>
              dispatch({ type: types.SET_ONBOARDING_SCREEN, payload: 0 })
            }
          >
            Register
          </button>
          <button
            className="btn btn-outline-dark"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onClick={() =>
              dispatch({ type: types.SET_ONBOARDING_SCREEN, payload: 1 })
            }
          >
            Log In
          </button>
        </nav>
        <div>{screen === 0 && <Register setScreen={props.setScreen} />}</div>
        <div>{screen === 1 && <Login />}</div>
        <Motto />
      </div>
    </>
  );
};

export default Onboarding;
