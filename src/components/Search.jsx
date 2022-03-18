import DisplayMatches from "./displayMatches";
import { getAge } from "../utils/matchingUtil";
import { findDistanceFromLongsAndLats } from "../utils";

const Search = (props) => {
  const { users } = props;

  // preferences of user
  const { height, age, kidsAccepted, acceptedDistance } = users[0].preferences;

  const acceptedReligions = [...props.users[0].preferences.acceptedReligions];

  let potentialMatches = [...users];

  // filter height
  potentialMatches = potentialMatches.filter((item) => {
    return (
      item.personalDetails.height > height.min &&
      item.personalDetails.height < height.max
    );
  });

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

  const distanceFilter = (user) => {
    // checks if users location is more less than accepted distance
    const distanceCheck = (user1, user2) => {
      const user1Location = user1.personalDetails.location;
      const user1AcceptedDistance = user1.preferences.acceptedDistance;
      const user2Location = user2.personalDetails.location;

      return (
        findDistanceFromLongsAndLats(user1Location, user2Location) <
        user1AcceptedDistance
      );
    };
    return distanceCheck(currentUser, user) && distanceCheck(user, currentUser);
  };

  return (
    <>
      <h2>Find your someone:</h2>
      <p>search below for your perfect match</p>
      <button>Remove Age filter</button>
      <button>Remove Gender filter</button>
      <button>Remove Height filter</button>
      <button>Remove Location filter</button>
      {/* <button>Order by location</button> */}
      {/* <input type="text"></input> */}

      <DisplayMatches users={potentialMatches} />
    </>
  );
};

export default Search;
