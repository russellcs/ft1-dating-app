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

const Matching = () => {
	const [currentResultIndex, setCurrentResultIndex] = useState(0);

	const users = useSelector((state) => state.matching.users);
	const matchingFilter = useSelector((state) => state.general.matchingFilter);
	const currentUserId = useSelector((state) => state.general.currentUserId);
	let currentUser = getUserById(currentUserId, users);
	const dispatch = useDispatch();

	// Creates duplicate of all users, filtered and sorted according to compatabilities with current user.
	let usersCopy = [...users];
	usersCopy.splice(
		usersCopy.findIndex((user) => user === currentUser),
		1
	);
	let filteredUsers = filteringUsers(usersCopy, currentUser, matchingFilter);
	let sortedUsers = sortingUsers(filteredUsers, currentUser);
	let userForReview = sortedUsers[currentResultIndex];

	// update current user's likes, check if they like eachother, load next user for review.
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

	//Add user being reviewed to current user's seen array.
	useEffect(() => {
		if (currentResultIndex < sortedUsers.length) {
			callAPI("ADD_TO_SEEN", {
				userId: currentUser.userId,
				foreignUserId: userForReview.userId,
			});

			// dispatch({
			//   type: types.ADD_TO_SEEN,
			//   payload: {
			//     seenUserId: userForReview.userId,
			//     currentUserId: currentUser.userId,
			//   },
			// });
		}
	}, [
		currentResultIndex,
		// currentUser.userId,
		// sortedUsers.length,
		// userForReview.userId,
		// dispatch,
	]);

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
