import { createSelector } from "reselect";

const getFriends = (state) => state.friend.friends;
const getAgeLimit = (state) => state.friend.ageLimit;
const getShowList = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => friends.filter((friend) => friend.age <= ageLimit)
);

export const getFriendsWithAgeShowLimit = createSelector(
  [getFriendsWithAgeLimit, getShowLimit],
  (getFriendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit)
);
