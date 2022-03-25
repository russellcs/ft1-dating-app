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
      <p>Remove some filters to ammend your search </p>
      <div>
        {buttons.map((button, index) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Search;
