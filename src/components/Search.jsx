import { types } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const matchingFilter = useSelector((state) => state.general.matchingFilter);

  return (
    <>
      <h2>Find your someone:</h2>
      <p>search below for your perfect match</p>

      <button
        name="ageFilter"
        onClick={(e) => {
          dispatch({ type: types.SET_FILTER_OPTIONS, payload: e.target.name });
        }}
      >
        {matchingFilter.ageFilter ? "Remove" : "Add"} Age filter
      </button>

      <button
        name="genderFilter"
        onClick={(e) => {
          dispatch({ type: types.SET_FILTER_OPTIONS, payload: e.target.name });
        }}
      >
        {matchingFilter.genderFilter ? "Remove" : "Add"} Gender filter
      </button>

      <button
        name="heightFilter"
        onClick={(e) => {
          dispatch({ type: types.SET_FILTER_OPTIONS, payload: e.target.name });
        }}
      >
        {matchingFilter.heightFilter ? "Remove" : "Add"} Height filter
      </button>

      <button
        name="distanceFilter"
        onClick={(e) => {
          dispatch({ type: types.SET_FILTER_OPTIONS, payload: e.target.name });
        }}
      >
        {matchingFilter.distanceFilter ? "Remove" : "Add"} Distance filter
      </button>

      <button
        name="existingKidsFilter"
        onClick={(e) => {
          dispatch({ type: types.SET_FILTER_OPTIONS, payload: e.target.name });
        }}
      >
        {matchingFilter.existingKidsFilter ? "Remove" : "Add"} Existing Kids
        filter
      </button>

      <button
        name="openToKidsFilter"
        onClick={(e) => {
          dispatch({ type: types.SET_FILTER_OPTIONS, payload: e.target.name });
        }}
      >
        {matchingFilter.openToKidsFilter ? "Remove" : "Add"} Open To Kids filter
      </button>

      <button
        name="seenFilter"
        onClick={(e) => {
          dispatch({ type: types.SET_FILTER_OPTIONS, payload: e.target.name });
        }}
      >
        {matchingFilter.seenFilter ? "Remove" : "Add"} Seen filter
      </button>
    </>
  );
};

export default Search;
