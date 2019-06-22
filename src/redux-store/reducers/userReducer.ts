import { UserState } from "../constants";
import { createReducer, updateObject } from "./reducerUtilities";

const initialState: UserState = {
  user: undefined,
  currentUser: undefined,
  loading: false,
  error: undefined,
  userPhotos: {
    userPhotos: [],
    userPhotosLoading: false,
    userPhotoErrors: undefined,
    page: 1,
    perPage: 30,
    order: 'latest'
  }
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


const fetchUserPhotosRequest = (state: UserState, { payload }: any) =>
  updateObject(state, {
    userPhotos: {
      userPhotosLoading: true
    }
  });

const fethcUserPhotosSuccess = (state: UserState, { payload }: any) =>
  updateObject(state, {
    userPhotos: {
      userPhotosLoading: false,
      userPhotos: payload
    }
  });

const fetchUserPhotosFailure = (state: UserState, { payload }: any) =>
  updateObject(state, {
    userPhotos: {
      userPhotosLoading: false,
      userPhotoErrors: payload
    }
  });

const clearUser = (state: UserState) =>
  updateObject(state, {
    user: undefined,
    userPhotos: {
      userPhotos: [],
      userPhotoErrors: undefined
    }
  });

export default createReducer(initialState, {
  FETCH_USER_REQUEST: fetchUserRequest,
  FETCH_USER_SUCCESS: fetchUserSuccess,
  FETCH_USER_FAILURE: fetchUserFailure,
  FETCH_USER_PHOTOS_REQUEST: fetchUserPhotosRequest,
  FETCH_USER_PHOTOS_SUCCESS: fethcUserPhotosSuccess,
  FETCH_USER_PHOTOS_FAILURE: fetchUserPhotosFailure,
  CLEAR_USER: clearUser
});
