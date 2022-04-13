import "./BypassOnboarding.scss";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types/types";

const BypassOnboarding = () => {
  const dispatch = useDispatch();

  return (
    <div className="BypassOnboarding">
      <button
        className="btn bypassOboarding"
        onClick={() => dispatch({ type: types.BYPASS_ONBOARDING })}
      >
        Hidden Message - Bypass Onboarding
      </button>
    </div>
  );
};

export default BypassOnboarding;
