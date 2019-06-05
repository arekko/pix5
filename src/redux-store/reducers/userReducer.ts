import { UserState } from "../constants";
import { createReducer, updateObject } from "./reducerUtilities";

const initialState: UserState = {
  user: undefined,
  currentUser: undefined,
  loading: false,
  error: undefined
};

const fetchUserRequest = (state: UserState) =>
  updateObject(state, {
    loading: true,
    error: undefined
  });

const fetchUserSuccess = (state: UserState, { payload }: any) =>
  updateObject(state, {
    user: payload,
    loading: false,
    error: undefined
  });

const fetchUserFailure = (state: UserState, { payload }: any) =>
  updateObject(state, {
    loading: false,
    error: payload
  });

const clearUser = (state: UserState) =>
  updateObject(state, {
    user: undefined
  });

export default createReducer(initialState, {
  FETCH_USER_REQUEST: fetchUserRequest,
  FETCH_USER_SUCCESS: fetchUserSuccess,
  FETCH_USER_FAILURE: fetchUserFailure,
  CLEAR_USER: clearUser
});
