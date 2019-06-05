import UnsplashApiService from "../../services/unsplashApiService";
import { User } from "../../types";
import { UserActions } from "../constants";
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

export const clearUser = (): UserActions => ({
  type: CLEAR_USER
});

export const fetchUser = (unsplashApiService: UnsplashApiService) => (
  username: string
) => (dispatch: any) => {
  dispatch(userRequest());
  unsplashApiService
    .getUser(username)
    .then((data: User) => dispatch(userSuccess(data)));
};
