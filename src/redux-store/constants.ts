import { Collection, Image, User } from "../types";

export const FETCH_PHOTOS_REQUEST = "FETCH_PHOTOS_REQUEST";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";

export const FETCH_PHOTO_REQUEST = "FETCH_PHOTO_REQUEST";
export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";
export const FETCH_PHOTO_FAILURE = "FETCH_PHOTO_FAILURE";
export const CLEAR_PHOTO = "CLEAR_PHOTO";

export const FETCH_COLLECTION_REQUEST = "FETCH_COLLECTION_REQUEST";
export const FETCH_COLLECTION_SUCCESS = "FETCH_COLLECTION_SUCCESS";
export const FETCH_COLLECTION_FAILURE = "FETCH_COLLECTION_FAILURE";

export const FETCH_COLLECTION_PHOTOS_REQUEST =
  "FETCH_COLLECTION_PHOTOS_REQUEST";
export const FETCH_COLLECTION_PHOTOS_SUCCESS =
  "FETCH_COLLECTION_PHOTOS_SUCCESS";
export const FETCH_COLLECTION_PHOTOS_FAILURE =
  "FETCH_COLLECTION_PHOTOS_FAILURE";

export const CLEAR_COLLECTION_PHOTOS = "CLEAR_COLLECTION_PHOTOS";

export const SET_TAB_INDEX = "SET_TAB_INDEX";

export const INC_PAGE = "INC_PAGE";

export const SET_COLLECTION_PAGE = "SET_COLLECTION_PAGE";
export const SET_COLLECTION_PHOTOS_PAGE = "SET_COLLECTION_PHOTOS_PAGE";

export const FETCH_MORE_COLLECTIONS_REQUEST = "FETCH_MORE_COLLECTIONS_REQUEST";
export const FETCH_MORE_COLLECTIONS_SUCCESS = "FETCH_MORE_COLLECTIONS_SUCCESS";
export const FETCH_MORE_COLLECTIONS_FAILURE = "FETCH_MORE_COLLECTIONS_FAILURE";

export const FETCH_MORE_COLLECTIONS_PHOTOS_REQUEST =
  "FETCH_MORE_COLLECTIONS_PHOTOS_REQUEST";
export const FETCH_MORE_COLLECTIONS_PHOTOS_SUCCESS =
  "FETCH_MORE_COLLECTIONS_PHOTOS_SUCCESS";
export const FETCH_MORE_COLLECTIONS_PHOTOS_FAILURE =
  "FETCH_MORE_COLLECTIONS_PHOTOS_FAILURE";

interface IncPage {
  type: typeof INC_PAGE;
}

interface setTabIndex {
  type: typeof SET_TAB_INDEX;
  payload?: number;
}

export interface PhotoState {
  collection: {
    collections: Collection[];
    loading: boolean;
    error: any;
    page: number;
    perPage: number;
    order: Order;
    loadingMore: boolean;
  };
  collectionPhotos: {
    collectionPhotos: Image[] | undefined;
    loading: boolean;
    error: any;
    page: number;
    perPage: number;
    order: Order;
    loadingMore: boolean;
  };
  photoList: {
    photos: Image[];
    page: number;
    perPage: number;
    order: Order;
    loadingMore: boolean;
    loading: boolean;
    error: any;
  };
  photoDetail: {
    photo: Image | undefined;
    loading: boolean;
    error: any;
  };
}

type Order = "latest" | "popular" | "oldest";
// Collections
interface CollectionRequested {
  type: typeof FETCH_COLLECTION_REQUEST;
  payload?: any;
}

interface CollectionSuccess {
  type: typeof FETCH_COLLECTION_SUCCESS;
  payload?: Collection[];
}

interface CollectionFailure {
  type: typeof FETCH_COLLECTION_FAILURE;
  payload?: any;
}

// Collction Photos
interface CollectionPhotosRequest {
  type: typeof FETCH_COLLECTION_PHOTOS_REQUEST;
  payload?: any;
}

interface CollectionPhotoSuccess {
  type: typeof FETCH_COLLECTION_PHOTOS_SUCCESS;
  payload?: Image[];
}

interface CollectionPhotoFailure {
  type: typeof FETCH_COLLECTION_PHOTOS_FAILURE;
  payload?: any;
}

interface ClearCollecitonPhotos {
  type: typeof CLEAR_COLLECTION_PHOTOS;
  payload?: any;
}

// Photos
interface PhotosLoaded {
  type: typeof FETCH_PHOTOS_SUCCESS;
  payload?: any;
}

interface PhotosError {
  type: typeof FETCH_PHOTOS_FAILURE;
  payload?: any;
}

interface PhotosRequested {
  type: typeof FETCH_PHOTOS_REQUEST;
  payload?: null;
}

interface PhotosLoaded {
  type: typeof FETCH_PHOTOS_SUCCESS;
  payload?: any;
}

interface PhotosError {
  type: typeof FETCH_PHOTOS_FAILURE;
  payload?: any;
}

interface PhotoRequested {
  type: typeof FETCH_PHOTO_REQUEST;
  payload?: null;
}

interface PhotoLoaded {
  type: typeof FETCH_PHOTO_SUCCESS;
  payload?: any;
}

interface PhotoError {
  type: typeof FETCH_PHOTO_FAILURE;
  payload?: any;
}
interface ClearPhoto {
  type: typeof CLEAR_PHOTO;
}

// Load more
export const LOAD_MORE_PHOTOS_REQUEST = "LOAD_MORE_PHOTOS_REQUEST";
export const LOAD_MORE_PHOTOS_SUCCESS = "LOAD_MORE_PHOTOS_SUCCESS";
export const LOAD_MORE_PHOTOS_FAILURE = "LOAD_MORE_PHOTOS_FAILURE";

interface LoadMorePhotosRequest {
  type: typeof LOAD_MORE_PHOTOS_REQUEST;
}

interface LoadMorePhotosSuccess {
  type: typeof LOAD_MORE_PHOTOS_SUCCESS;
  payload: Image[];
}

interface LoadMorePhotoFailure {
  type: typeof LOAD_MORE_PHOTOS_FAILURE;
  payload: any;
}

export type PhotosActionTypes =
  | PhotosRequested
  | PhotosLoaded
  | PhotosError
  | PhotoRequested
  | PhotoLoaded
  | PhotoError
  | ClearPhoto
  | CollectionRequested
  | CollectionSuccess
  | CollectionFailure
  | CollectionPhotosRequest
  | CollectionPhotoSuccess
  | CollectionPhotoFailure
  | ClearCollecitonPhotos
  | IncPage
  | LoadMorePhotosRequest
  | LoadMorePhotoFailure
  | LoadMorePhotosSuccess;

export type TabsActionTypes = setTabIndex;

// User actions

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const FETCH_USER_PHOTOS_REQUEST = "FETCH_USER_PHOTOS_REQUEST";
export const FETCH_USER_PHOTOS_SUCCESS = "FETCH_USER_PHOTOS_SUCCESS";
export const FETCH_USER_PHOTOS_FAILURE = "FETCH_USER_PHOTOS_FAILURE";

export const CLEAR_USER = "CLEAR_USER";

export interface UserState {
  user: User | undefined;
  currentUser: User | undefined;
  loading: boolean;
  error: any | undefined;
  userPhotos: {
    userPhotos: Image[];
    userPhotosLoading: boolean;
    userPhotoErrors: any | undefined;
    page: number,
    order: Order,
    perPage: number
  };
}

interface UserRequest {
  type: typeof FETCH_USER_REQUEST;
}

interface UserSuccess {
  type: typeof FETCH_USER_SUCCESS;
  payload: User;
}

interface UserFailure {
  type: typeof FETCH_USER_FAILURE;
  payload: any;
}

interface UserPhotosRequest {
  type: typeof FETCH_USER_PHOTOS_REQUEST;
}

interface UserPhotosSuccess {
  type: typeof FETCH_USER_PHOTOS_SUCCESS;
  payload: Image[];
}

interface UserPhotosFailure {
  type: typeof FETCH_USER_PHOTOS_FAILURE;
  payload: any;
}
interface ClearUser {
  type: typeof CLEAR_USER;
}

export type UserActions =
  | UserRequest
  | UserSuccess
  | UserFailure
  | ClearUser
  | UserPhotosFailure
  | UserPhotosRequest
  | UserPhotosSuccess;
