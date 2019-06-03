import { PhotoState } from "../constants";
import { createReducer, updateObject } from "./reducerUtilities";

const initialState: PhotoState = {
  collections: [],
  collectionPhotos: undefined,
  photos: [],
  photo: undefined,
  loading: false,
  error: null
};

// collections
const fetchCollectionRequest = (state: PhotoState) =>
  updateObject(state, {
    loading: true,
    error: null
  });

const fetchCollectionSuccess = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collections: payload,
    loading: false,
    error: null
  });

const fetchCollectionFailure = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    loading: false,
    error: payload
  });

const fetchCollectionPhotoRequest = (state: PhotoState) =>
  updateObject(state, {
    loading: true,
    error: null
  });

const fetchCollecitonPhotoSuccess = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collectionPhotos: payload,
    loading: false,
    error: null
  });

const fetchCollectionPhotoFailure = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    loading: false,
    error: payload
  });

const clearCollectionPhotos = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collectionPhotos: undefined
  });

/// -----

const fetchPhotosRequest = (state: PhotoState) =>
  updateObject(state, {
    loading: true,
    error: null
  });

const fetchPhotosSuccess = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    photos: payload,
    loading: false,
    error: null
  });

const fetchPhotosFailure = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    loading: false,
    error: payload
  });
// ---
const fetchPhotoRequest = (state: PhotoState) =>
  updateObject(state, {
    loading: true,
    error: null
  });

const fetchPhotoSuccess = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    photo: payload,
    loading: false,
    error: null
  });

const fetchPhotoFailure = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    loading: false,
    error: payload
  });

const clearPhoto = (state: PhotoState) =>
  updateObject(state, {
    photo: undefined
  });

export default createReducer(initialState, {
  FETCH_PHOTOS_REQUEST: fetchPhotosRequest,
  FETCH_PHOTOS_SUCCESS: fetchPhotosSuccess,
  FETCH_PHOTOS_FAILURE: fetchPhotosFailure,
  FETCH_PHOTO_REQUEST: fetchPhotoRequest,
  FETCH_PHOTO_SUCCESS: fetchPhotoSuccess,
  FETCH_PHOTO_FAILURE: fetchPhotoFailure,
  FETCH_COLLECTION_REQUEST: fetchCollectionRequest,
  FETCH_COLLECTION_SUCCESS: fetchCollectionSuccess,
  FETCH_COLLECTION_FAILURE: fetchCollectionFailure,
  FETCH_COLLECTION_PHOTOS_REQUEST: fetchCollectionPhotoRequest,
  FETCH_COLLECTION_PHOTOS_SUCCESS: fetchCollecitonPhotoSuccess,
  FETCH_COLLECTION_PHOTOS_FAILURE: fetchCollectionPhotoFailure,
  CLEAR_COLLECTION_PHOTOS: clearCollectionPhotos,
  CLEAR_PHOTO: clearPhoto
});
