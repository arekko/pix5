import UnsplashApiService from "../../services/unsplashApiService";
import { Image, User } from "../../types";
import {
  FETCH_USER_PHOTOS_FAILURE,
  FETCH_USER_PHOTOS_REQUEST,
  FETCH_USER_PHOTOS_SUCCESS,
  UserActions
} from "../constants";
import {
  CLEAR_USER,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from "./../constants";

export const userRequest = (): UserActions => ({
  type: FETCH_USER_REQUEST
});

export const userSuccess = (user: User): UserActions => ({
  type: FETCH_USER_SUCCESS,
  payload: user
});

export const userFailure = (error: any): UserActions => ({
  type: FETCH_USER_FAILURE,
  payload: error
});

export const userPhotosRequest = (): UserActions => ({
  type: FETCH_USER_PHOTOS_REQUEST
});

export const userPhotosFailure = (error: any): UserActions => ({
  type: FETCH_USER_PHOTOS_FAILURE,
  payload: error
});

export const userPhotosSuccess = (photos: Image[]): UserActions => ({
  type: FETCH_USER_PHOTOS_SUCCESS,
  payload: photos
});

export const clearUser = (): UserActions => ({
  type: CLEAR_USER
});

export const fetchUser = (unsplashApiService: UnsplashApiService) => (
  username: string
) => (dispatch: any) => {
  dispatch(userRequest());
  unsplashApiService
    .fetchUser(username)
    .then((data: User) => dispatch(userSuccess(data)));
};

export const fetchUserPhotos = (unsplashApiService: UnsplashApiService) => (
  username: string
) => (dispatch: any, getState: any) => {
  const {
    user: {
      userPhotos: { page, perPage, order }
    }
  } = getState();
  dispatch(userPhotosRequest());
  unsplashApiService
    .fetchUserPhotos({ username, page, perPage, order })
    .then((data: Image[]) => dispatch(userPhotosSuccess(data)));
};
