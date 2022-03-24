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
  smokersPointer,
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
      marriageCasualPointer(
        {
          marriage: currentUser.preferences.lifeStyle.marriage,
          casual: currentUser.preferences.lifeStyle.casual,
        },
        {
          marriage: userA.preferences.lifeStyle.marriage,
          casual: userA.preferences.lifeStyle.casual,
        }
      ) +
      kidsPointer(
        currentUser.preferences.lifeStyle.openToKids,
        userA.preferences.lifeStyle.openToKids
      ) +
      religionPointer(
        currentUser.personalDetails.religion,
        userA.personalDetails.religion
      ) +
      smokersPointer(
        currentUser.personalDetails.smokers,
        userA.personalDetails.smokers
      ) +
      lastSeenPointer(currentUser.seen, userA.userId);

    let totalPointsUserB =
      marriageCasualPointer(
        {
          marriage: currentUser.preferences.lifeStyle.marriage,
          casual: currentUser.preferences.lifeStyle.casual,
        },
        {
          marriage: userB.preferences.lifeStyle.marriage,
          casual: userB.preferences.lifeStyle.casual,
        }
      ) +
      kidsPointer(
        currentUser.preferences.lifeStyle.openToKids,
        userB.preferences.lifeStyle.openToKids
      ) +
      religionPointer(
        currentUser.personalDetails.religion,
        userB.personalDetails.religion
      ) +
      smokersPointer(
        currentUser.personalDetails.smokers,
        userB.personalDetails.smokers
      ) +
      lastSeenPointer(currentUser.seen, userB.userId);

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

  // Creates filtered array of users for current user to review
  let filteredUsers = [...users];
  filteredUsers.splice(
    filteredUsers.findIndex((user) => user === currentUser),
    1
  );
  filteredUsers = filteredUsers.filter(potentialMatchFilter);
  filteredUsers = filteredUsers.sort(potentialMatchSorter);
  let userForReview = filteredUsers[currentResultIndex];
  console.log(filteredUsers);

  // add to currentUser's likes, check if they like eachother, load next user for review
  const onLike = (user) => {
    const usersToAddToLikes = { user, currentUser };
    dispatch({ type: types.ADD_TO_LIKES, payload: usersToAddToLikes });

    dispatch({
      type: types.UPDATE_MATCHES,
      payload: { seenUserId: user.userId, currentUserId: currentUser.userId },
    });

    setCurrentResultIndex(currentResultIndex + 1);
  };

  // load next user for review
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
