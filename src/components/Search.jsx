const Search = (props) => {
  return (
    <>
      <h2>Find your someone:</h2>
      <p>search below for your perfect match</p>

      <button
        onClick={() => {
          const newState = { ...props.filterOptions };
          newState.ageFilter = !newState.ageFilter;
          props.setFilterOptions(newState);
        }}
      >
        {props.filterOptions.ageFilter ? "Remove" : "Add"} Age filter
      </button>

      <button
        onClick={() => {
          const newState = { ...props.filterOptions };
          newState.genderFilter = !newState.genderFilter;
          props.setFilterOptions(newState);
        }}
      >
        {props.filterOptions.genderFilter ? "Remove" : "Add"} Gender filter
      </button>

      <button
        onClick={() => {
          const newState = { ...props.filterOptions };
          newState.heightFilter = !newState.heightFilter;
          props.setFilterOptions(newState);
        }}
      >
        {props.filterOptions.heightFilter ? "Remove" : "Add"} Height filter
      </button>

      <button
        onClick={() => {
          const newState = { ...props.filterOptions };
          newState.distanceFilter = !newState.distanceFilter;
          props.setFilterOptions(newState);
        }}
      >
        {props.filterOptions.distanceFilter ? "Remove" : "Add"} Location filter
      </button>
      <button
        onClick={() => {
          const newState = { ...props.filterOptions };
          newState.existingKidsFilter = !newState.existingKidsFilter;
          props.setFilterOptions(newState);
        }}
      >
        {props.filterOptions.existingKidsFilter ? "Remove" : "Add"} Existing Kids filter
      </button>
      
      <button
        onClick={() => {
          const newState = { ...props.filterOptions };
          newState.openToKidsFilter = !newState.openToKidsFilter;
          props.setFilterOptions(newState);
        }}
      >
        {props.filterOptions.openToKidsFilter ? "Remove" : "Add"} Open To Kids filter
      </button>
    </>
  );
};

export default Search;
