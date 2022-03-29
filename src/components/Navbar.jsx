import { useDispatch } from "react-redux";
import { types } from "../redux/types";
import { useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.general.loggedIn);

  return (
    <nav className="nav nav-pills flex-column flex-sm-row bg-light">
      {/* {loggedIn === false && (
        <button
          className="nav-link"
          onClick={() => dispatch({ type: types.SET_SCREEN, payload: 0 })}
        >
          Onboarding
        </button>
      )} */}
      <button
        className="nav-link"
        onClick={() => dispatch({ type: types.SET_SCREEN, payload: 1 })}
      >
        Matches
      </button>

      <button
        className="nav-link"
        onClick={() => dispatch({ type: types.SET_SCREEN, payload: 2 })}
      >
        Messages
      </button>
    </nav>
  );
};

export default Navbar;
