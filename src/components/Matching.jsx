import MatchedUser from "./matching/MatchedUser";
import "./matching/matching.scss";
import {
  getUserById,
  distanceFilter,
  ageFilter,
  genderFilter,
  heightFilter,
  existingKidsFilter,
  openToKidsFilter,
  kidsPointer,
  marriageCasualPointer,
  religionPointer,
  lastSeenPointer,
} from "../utils/matching";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../redux/types";

const Matching = (props) => {
  const [currentResultIndex, setCurrentResultIndex] = useState(0);
  const [filterOptions, setFilterOptions] = useState({
    seenFilter: true,
    genderFilter: true,
    heightFilter: true,
    existingKidsFilter: true,
    openToKidsFilter: true,
    distanceFilter: true,
    ageFilter: true,
  });

  const users = useSelector((state) => state.matching.users);

  const dispatch = useDispatch();
  // just for WiP
  const currentUserId = 1;
  let currentUser = getUserById(currentUserId, users);

  // Filters out incompatible users (including seen) from array of potencial matches
  const potentialMatchFilter = (user) => {
    return filterOptions.distanceFilter && !distanceFilter(currentUser, user)
      ? false
      : filterOptions.ageFilter && !ageFilter(currentUser, user)
      ? false
      : filterOptions.genderFilter && !genderFilter(currentUser, user)
      ? false
      : filterOptions.heightFilter && !heightFilter(currentUser, user)
      ? false
      : filterOptions.existingKidsFilter &&
        !existingKidsFilter(currentUser, user)
      ? false
      : filterOptions.openToKidsFilter && !openToKidsFilter(currentUser, user)
      ? false
      : true;
  };

  // Sorts array of potential matches to display most compatible matches first. Always displays last seen user first.
  const potentialMatchSorter = (userA, userB) => {
    let totalPointsUserA =
      marriageCasualPointer(currentUser, userA) +
      kidsPointer(currentUser, userA) +
      religionPointer(currentUser, userA) +
      lastSeenPointer(currentUser, userA);
    let totalPointsUserB =
      marriageCasualPointer(currentUser, userB) +
      kidsPointer(currentUser, userB) +
      religionPointer(currentUser, userB) +
      lastSeenPointer(currentUser, userA);

    return totalPointsUserA < totalPointsUserB
      ? 1
      : totalPointsUserA > totalPointsUserB
      ? -1
      : 0;
  };

  //seen NEEDS WORK
  const seenFilter = (currentUser, user) => {
    return currentUser.seen.includes(currentUser.userId) === false;
  };

  let filteredUsers = [...users];
  filteredUsers.splice(
    filteredUsers.findIndex((user) => user === currentUser),
    1
  );
  filteredUsers = filteredUsers.filter(potentialMatchFilter);
  filteredUsers = filteredUsers.sort(potentialMatchSorter);

  let userForReview = filteredUsers[currentResultIndex];

  // useEffect(() => {
  //   if (currentResultIndex < filteredUsers.length)
  //     // props.addToSeen(userForReview.userId, currentUser.userId);
  // }, [currentResultIndex]);

  const onLike = (user) => {
    // props.addToLikes(user, currentUser.userId);
    const usersToAddToLikes = { user, currentUser };
    dispatch({ type: types.ADD_TO_LIKES, payload: usersToAddToLikes });

    dispatch({
      type: types.UPDATE_MATCHES,
      payload: { seenUserId: user.userId, currentUserId: currentUser.userId },
    });

    // check if they like eachother - in matches array
    // initiate messages
    // - crossover of reducers

    // setCurrentResultIndex(currentResultIndex + 1);
  };

  const onPass = () => {
    setCurrentResultIndex(currentResultIndex + 1);
  };

  //Add user being reviewed to current user's seen array.
  useEffect(() => {
    if (currentResultIndex < filteredUsers.length)
      dispatch({
        type: types.ADD_TO_SEEN,
        payload: {
          seenUserId: userForReview.userId,
          currentUserId: currentUser.userId,
        },
      });
  }, [currentResultIndex]);
  //N.B: in testing, when i refresh local storage resets, is this right?

  return (
    <>
      <Search
        setFilterOptions={setFilterOptions}
        filterOptions={filterOptions}
      />

      {currentResultIndex < filteredUsers.length ? (
        <>
          <div className="userCard">
            <MatchedUser user={userForReview} />
          </div>
          <button onClick={() => onLike(userForReview)}>Like</button>
          <button onClick={() => onPass()}>Pass</button>{" "}
        </>
      ) : (
        <p>
          You've seen all potential matches in current search parameters, try
          again later or be less picky!
        </p>
      )}
    </>
  );
};

export default Matching;
