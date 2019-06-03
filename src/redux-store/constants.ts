import { Collection, Image } from "../types";

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

interface setTabIndex {
  type: typeof SET_TAB_INDEX;
  payload?: number;
}

export interface PhotoState {
  collections: Collection[];
  collectionPhotos: Image[] | undefined;
  photos: Image[];
  photo: Image | undefined;
  loading: boolean;
  error: any | null;
}
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
  | ClearCollecitonPhotos;

export type TabsActionTypes = setTabIndex;
