import { types } from "../../redux/types/types";
import { useDispatch, useSelector } from "react-redux";
import "./search.scss";
import gsap from "gsap";

const Search = () => {
  const dispatch = useDispatch();
  const matchingFilter = useSelector((state) => state.general.matchingFilter);

  const buttons = [
    { name: "ageFilter", displayName: "Age" },
    { name: "genderFilter", displayName: "Gender" },
    { name: "heightFilter", displayName: "Height" },
    { name: "distanceFilter", displayName: "Location" },
    { name: "existingKidsFilter", displayName: "Existing Kids" },
    { name: "openToKidsFilter", displayName: "Open To Kids" },
    // { name: "seenFilter", displayName: "Seen" },
  ];

  const onEnter = ({ currentTarget }) => {
    const newColour = matchingFilter[currentTarget.name] ? "#FFBC49" : "coral";
    gsap.to(currentTarget, { backgroundColor: newColour });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#f8f9fa" });
  };

  return (
    <div className="search ">
      <h2>Find your someone:</h2>
      <p>See below for your matches, toggle the filters to amend your search</p>
      <a
        data-toggle="collapse"
        href="#searchButtonsCollapse"
        role="button"
        aria-expanded="false"
      >
        Search Options
      </a>
      <div className="searchButtons collapse" id="searchButtonsCollapse">
        {buttons.map((button, index) => {
          return (
            <button
              className="btn btn-light "
              key={index}
              name={button.name}
              onClick={(e) => {
                dispatch({
                  type: types.SET_FILTER_OPTIONS,
                  payload: e.target.name,
                });
              }}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              {matchingFilter[button.name] ? "Remove " : "Add "}
              <span style={{ pointerEvents: "none" }}>
                {button.displayName}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
