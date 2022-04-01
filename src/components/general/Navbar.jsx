import { useDispatch } from "react-redux";
import { types } from "../../redux/types/types";
import gsap from "gsap";

const Navbar = () => {
  const dispatch = useDispatch();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "tomato" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "black" });
  };

  return (
    <nav className="nav nav-pills flex-column flex-sm-row bg-light d-flex justify-content-center">
      <button
        className="nav-link"
        style={{ color: "black" }}
        onClick={() => dispatch({ type: types.SET_SCREEN, payload: 1 })}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        Matches
      </button>

      <button
        className="nav-link"
        style={{ color: "black" }}
        onClick={() => dispatch({ type: types.SET_SCREEN, payload: 2 })}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        Messages
      </button>
    </nav>
  );
};

export default Navbar;
