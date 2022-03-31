import Interface from "./components/Interface";
import { useDispatch } from "react-redux";
import { types } from "./redux/types";
import { useSelector } from "react-redux";
import Title from "./components/Title";

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.general.loggedIn);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Clear localStorage
      </button>

      {loggedIn === true && (
        <button
          className="btn log-out "
          style={{ float: "right" }}
          onClick={() => {
            dispatch({ type: types.LOG_OUT });
          }}
        >
          Log Out
        </button>
      )}
      <Title />
      <Interface />
    </>
  );
};

export default App;
