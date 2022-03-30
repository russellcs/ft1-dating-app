import { types } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import "./matching/search.scss";

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
    { name: "seenFilter", displayName: "Seen" },
  ];

  return (
    <div className="search">
      <h2>Find your someone:</h2>
      <p>Search below for your perfect match</p>
      <p>Remove some filters to amend your search </p>
      <div>
        {buttons.map((button, index) => {
          return (
            <>
              <button
                className="btn btn-light"
                key={index}
                name={button.name}
                onClick={(e) => {
                  dispatch({
                    type: types.SET_FILTER_OPTIONS,
                    payload: e.target.name,
                  });
                }}
              >
                {matchingFilter[button.name] ? "Remove " : "Add "}
                <span>{button.displayName}</span>
              </button>
              {/* <svg
                id="demo"
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="60"
                viewBox="0 0 220 60"
              >
                <rect
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  rx="30"
                  ry="30"
                  // fill="#FFCC66"
                  // style="opacity: 0.4;"
                />
                <text
                  transform="translate(80 38)"
                  text-anchor="middle"
                  font-size="20"
                  fill="#000"
                >
                  READ MORE
                </text>
              </svg> */}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
