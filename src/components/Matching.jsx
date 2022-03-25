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
  seenFilter,
  kidsPointer,
  marriageCasualPointer,
  religionPointer,
  lastSeenPointer,
} from "../utils/matching";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../redux/types";

const Matching = () => {
  const [currentResultIndex, setCurrentResultIndex] = useState(0);

  const users = useSelector((state) => state.matching.users);
  const matchingFilter = useSelector((state) => state.general.matchingFilter);

  const dispatch = useDispatch();
  // just for WiP
  const currentUserId = 1;
  let currentUser = getUserById(currentUserId, users);

  // Filters out incompatible users (including seen) from array of potencial matches
  const potentialMatchFilter = (user) => {
    return matchingFilter.distanceFilter && !distanceFilter(currentUser, user)
      ? false
      : matchingFilter.ageFilter && !ageFilter(currentUser, user)
      ? false
      : matchingFilter.genderFilter && !genderFilter(currentUser, user)
      ? false
      : matchingFilter.heightFilter && !heightFilter(currentUser, user)
      ? false
      : matchingFilter.existingKidsFilter &&
        !existingKidsFilter(currentUser, user)
      ? false
      : matchingFilter.openToKidsFilter && !openToKidsFilter(currentUser, user)
      ? false
      : matchingFilter.seenFilter && !seenFilter(currentUser, user)
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

  let filteredUsers = [...users];
  filteredUsers.splice(
    filteredUsers.findIndex((user) => user === currentUser),
    1
  );
  filteredUsers = filteredUsers.filter(potentialMatchFilter);
  filteredUsers = filteredUsers.sort(potentialMatchSorter);

  let userForReview = filteredUsers[currentResultIndex];

  const onLike = (user) => {
    const usersToAddToLikes = { user, currentUser };
    dispatch({ type: types.ADD_TO_LIKES, payload: usersToAddToLikes });
    dispatch({
      type: types.UPDATE_MATCHES,
      payload: { seenUserId: user.userId, currentUserId: currentUser.userId },
    });
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
      <Search />

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
