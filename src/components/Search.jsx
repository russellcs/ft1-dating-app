import DisplayMatches from "./displayMatches";
import { getAge } from "../utils/matching";
import { findDistanceFromLongsAndLats } from "../utils/general";

const Search = (props) => {
  // const { users } = props;

  // // preferences of user
  // const { height, age, kidsAccepted, acceptedDistance } = users[0].preferences;

  // const acceptedReligions = [...props.users[0].preferences.acceptedReligions];

  // let potentialMatches = [...users];

  // // filter height
  // potentialMatches = potentialMatches.filter((item) => {
  //   return (
  //     item.personalDetails.height > height.min &&
  //     item.personalDetails.height < height.max
  //   );
  // });

  // filter age ( loosely )
  // potentialMatches = potentialMatches.filter((item) => {
  //   let age = getAge(item);
  //   return age > age.min && age < age.max;
  // });

  //filter by existing children
  // potentialMatches = potentialMatches.filter((item) => {
  //   return item.personalDetails.kids === kidsAccepted;
  // });

  //filter by accepted religions
  // potentialMatches = potentialMatches.filter((item) => {
  //   return acceptedReligions.includes(item.personalDetails.religion);
  // });

  // filter by location
  // const userPostcode = (users[0].personalDetails.location.postCode).toUpperCase();
  // const potentialMatchPostcode = (users[1].personalDetails.location.postCode).toUpperCase();

  // not called here - repeated everytime a search happens - but on intial information entry
  // async function getUserLngLat(userPostcode) {
  //   const userLngLat = await getLngLat(userPostcode);
  //   console.log(userLngLat)
  // }
  // getUserLngLat(userPostcode)

  // potentialMatches = potentialMatches.filter((users) => {
  //   return findDistanceFromLongsAndLats(userLocation, users.personalDetails.location) < acceptedDistance;
  // })

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
        Remove Age filter
      </button>
      <button
        onClick={() => {
          const newState = { ...props.filterOptions };
          newState.genderFilter = !newState.genderFilter;
          props.setFilterOptions(newState);
        }}
      >
        Remove Gender filter
      </button>
      <button
        onClick={() => {
          const newState = { ...props.filterOptions };
          newState.heightFilter = !newState.heightFilter;
          props.setFilterOptions(newState);
        }}
      >
        Remove Height filter
      </button>
      <button
        onClick={() => {
          const newState = { ...props.filterOptions };
          newState.distanceFilter = !newState.distanceFilter;
          props.setFilterOptions(newState);
        }}
      >
        Remove Location filter
      </button>
      {/* <button>Order by location</button> */}
      {/* <input type="text"></input> */}

      {/* <DisplayMatches users={potentialMatches} /> */}
    </>
  );
};

export default Search;
