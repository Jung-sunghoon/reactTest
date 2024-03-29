// import createReducer from "../common/createReducer";

// const ADD = "friend/ADD";
// const REMOVE = "friend/REMOVE";
// const EDIT = "friend/EDIT";

// export const addFriend = (friend) => ({ type: ADD, friend });
// export const removeFriend = (friend) => ({ type: REMOVE, friend });
// export const editFriend = (friend) => ({ type: EDIT, friend });

// const INITIAL_STATE = { friends: [] };

// const reducer = createReducer(INITIAL_STATE, {
//   [ADD]: (state, action) => state.friends.push(action.friend),
//   [REMOVE]: (state, action) =>
//     (state.friends = state.friends.filter(
//       (friend) => friend.id !== action.friend.id
//     )),
//   [EDIT]: (state, action) => {
//     const index = state.friends.findIndex(
//       (friend) => friend.id === action.friend.id
//     );
//     if (index >= 0) {
//       state.friends[index] = action.friend;
//     }
//   },
// });

// export default reducer;

import createItemsLogic from "../../common/createItemsLogic";
import createReducer from "../../common/createReducer";
import mergeReducers from "../../common/mergeReducers";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";

const {
  add,
  remove,
  edit,
  reducer: friendsReducer,
} = createItemsLogic("friends");

const SET_AGE_LIMIT = "friend/SET_AGE_LIMIT";
const SET_SHOW_LIMIT = "friend/SET_SHOW_LIMIT";

export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;
export const setAgeLimit = (ageLimit) => ({ type: SET_AGE_LIMIT, ageLimit });
export const setShowLimit = (showLimit) => ({
  type: SET_SHOW_LIMIT,
  showLimit,
});

const INITIAL_STATE = { ageLimit: MAX_AGE_LIMIT, showLimit: MAX_SHOW_LIMIT };

const reducer = createReducer(INITIAL_STATE, {
  [SET_AGE_LIMIT]: (state, action) => (state.ageLimit = action.ageLimit),
  [SET_SHOW_LIMIT]: (state, action) => (state.showLimit = action.showLimit),
});

const reducers = [reducer, friendsReducer];

export default mergeReducers(reducers);
