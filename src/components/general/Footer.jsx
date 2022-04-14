import "./Footer.scss";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../../redux/types/types";

const Footer = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.general.loggedIn);
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="site-logo">
          <a href="#">Back to Top</a>
          {loggedIn === true && (
            <button
              className="btn log-out "
              onClick={() => {
                dispatch({ type: types.LOG_OUT });
              }}
            >
              Log Out
            </button>
          )}
        </div>

        <div className="copyright">
          <p>
            <small>Copyright {year}. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
