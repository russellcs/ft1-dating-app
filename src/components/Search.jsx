import DisplayMatches from "./displayMatches";
import { calculateAge } from "./utils/utils";

const Search = (props) => {
  const { users } = props;

  // preferences of user
  const { min, max } = props.users[0].preferences.height;
  const { minAge, maxAge } = props.users[0].preferences;
  const { kidsAccepted } = props.users[0].preferences;
  // const prefferedDistance = 10
  const acceptedReligions = [...props.users[0].preferences.acceptedReligions];

  let potentialMatches = [...users];

  // filter height
  potentialMatches = potentialMatches.filter((item) => {
    return (
      item.personalDetails.height > min && item.personalDetails.height < max
    );
  });

  // filter age ( loosely )
  potentialMatches = potentialMatches.filter((item) => {
    let age = calculateAge(item.personalDetails.dob.year);
    return age > minAge && age < maxAge;
  });

  //filter by existing children
  potentialMatches = potentialMatches.filter((item) => {
    return item.personalDetails.kids === kidsAccepted;
  });

  //filter by accepted religions
  potentialMatches = potentialMatches.filter((item) => {
    return acceptedReligions.includes(item.personalDetails.religion);
  });

  return (
    <>
      <h2>Find your someone:</h2>
      <p>search below for your perfect match</p>
      <button>Filter by age</button>
      <button>Filter by height</button>
      <button>Filter by kids</button>
      {/* <button>Order by location</button> */}
      {/* <input type="text"></input> */}

      <DisplayMatches users={potentialMatches} />
    </>
  );
};

export default Search;
