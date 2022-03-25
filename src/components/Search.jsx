import { types } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const matchingFilter = useSelector((state) => state.general.matchingFilter);

  const buttons = [
    { name: "ageFilter", displayName: "Age filter" },
    { name: "genderFilter", displayName: "Gender filter" },
    { name: "heightFilter", displayName: "Height filter" },
    { name: "distanceFilter", displayName: "Location filter" },
    { name: "existingKidsFilter", displayName: "Existing Kids filter" },
    { name: "openToKidsFilter", displayName: "Open To Kids filter" },
    { name: "seenFilter", displayName: "Seen filter" },
  ];

  return (
    <>
      <h2>Find your someone:</h2>
      <p>search below for your perfect match</p>

      {buttons.map((button, index) => {
        return (
          <button
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
            {button.displayName}
          </button>
        );
      })}
    </>
  );
};

export default Search;
