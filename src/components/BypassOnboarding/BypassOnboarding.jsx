import Navbar from "../Navbar";
import "./BypassOnboarding.scss";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types";

const BypassOnboarding = () => {
  const dispatch = useDispatch();
  // let hidden = true

  // const hiddenClicked = () => {
  //   hidden = !hidden;
  //   console.log(hidden)

  //   if (hidden === false) { 
  //     console.log("Navbar to show");
  //     console.log("screen to be 1");
  //     <Navbar /> 
  //   }
  // }

  return (
    <div className="BypassOnboarding">
      <button className="btn" onClick={() => dispatch({type: types.BYPASS_ONBOARDING})}>Hidden Message - Bypass Onboarding</button>
    </div>
  );
};

export default BypassOnboarding;
