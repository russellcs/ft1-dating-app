import MatchedUser from "./MatchedUser";
import "./matching.scss";
import { getUserById } from "../../utils/general";
import { filteringUsers } from "../../utils/filters";
import { sortingUsers } from "../../utils/pointers";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../../redux/types/types";
import { gsap } from "gsap";
import { callAPI } from "../../dataController/matching";

// MATCHING: Where potential matches are displayed and current user likes/passes.
const Matching = () => {
  const [currentResultIndex, setCurrentResultIndex] = useState(0); // state to control which potential match is shown to current user.
  const matchingFilter = useSelector((state) => state.general.matchingFilter); // state to control which filters are applied (so the user can change these)
  const currentUserId = useSelector((state) => state.general.currentUserId);
  const users = useSelector((state) => state.matching.users);
  let currentUser = getUserById(currentUserId, users);
  const dispatch = useDispatch();

  // Creates list of potential matches for current user to review. Created from a copy of all users, filtered and sorted according to compatabilities with current user.
  let usersCopy = [...users];
  usersCopy.splice(
    usersCopy.findIndex((user) => user === currentUser),
    1
  );
  let filteredUsers = filteringUsers(usersCopy, currentUser, matchingFilter);
  let sortedUsers = sortingUsers(filteredUsers, currentUser);
  let userForReview = sortedUsers[currentResultIndex];

  // Add user being reviewed to current user's seen array.
  useEffect(() => {
    if (currentResultIndex < sortedUsers.length) {
      callAPI("ADD_TO_SEEN", {
        userId: currentUser.userId,
        foreignUserId: userForReview.userId,
      });
    }
  }, [
    currentResultIndex,
    // currentUser.userId,
    sortedUsers.length,
    // userForReview.userId,
    dispatch,
  ]);

  // update current user's likes, check if they like eachother to add to matches if they have, load next user for review.
  const onLike = (user) => {
    callAPI("ADD_TO_LIKES", {
      userId: currentUser.userId,
      foreignUserId: user.userId,
    });

    const usersToAddToLikes = { user, currentUser };
    dispatch({ type: types.ADD_TO_LIKES, payload: usersToAddToLikes });
    dispatch({
      type: types.UPDATE_MATCHES,
      payload: { seenUserId: user.userId, currentUserId: currentUser.userId },
    });
    //foreign ID convention not seenUser

    setCurrentResultIndex(currentResultIndex + 1);
  };

  // load next user for review
  const onPass = () => {
    setCurrentResultIndex(currentResultIndex + 1);
    gsap.fromTo(".btn-pass", { color: "#000" }, { color: "#fff", duration: 1 });
  };

  return (
    <>
      <Search />

      {currentResultIndex < sortedUsers.length ? (
        <div className="container">
          <div className="userCard row card container-sm shadow">
            <MatchedUser user={userForReview} />
          </div>
          <div className="row my-2">
            <button
              className="col btn btn-pass btn-round btn-lg ms-3 me-2 mt-2"
              onClick={() => onPass()}
            >
              Pass
            </button>
            <button
              className="col btn btn-success btn-round btn-lg ms-2 me-3 mt-2"
              onClick={() => onLike(userForReview)}
            >
              Like
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>
            You've seen all potential matches in current search parameters, try
            again later or be less picky!
          </p>
        </div>
      )}
    </>
  );
};

export default Matching;
