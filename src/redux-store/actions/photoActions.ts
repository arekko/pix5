import UnsplashApiService, { OrderBy } from "../../services/unsplashApiService";
import { Image } from "../../types";
import {
  CLEAR_COLLECTION_PHOTOS,
  CLEAR_PHOTO,
  FETCH_COLLECTION_FAILURE,
  FETCH_COLLECTION_PHOTOS_FAILURE,
  FETCH_COLLECTION_PHOTOS_REQUEST,
  FETCH_COLLECTION_PHOTOS_SUCCESS,
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_SUCCESS,
  FETCH_PHOTO_FAILURE,
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_SUCCESS,
  INC_PAGE,
  LOAD_MORE_PHOTOS_FAILURE,
  LOAD_MORE_PHOTOS_REQUEST,
  LOAD_MORE_PHOTOS_SUCCESS,
  PhotosActionTypes
} from "../constants";
import { Collection } from "./../../types/index";
import {
  FETCH_PHOTOS_FAILURE,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS
} from "./../constants";

export const collectionRequested = (): PhotosActionTypes => ({
  type: FETCH_COLLECTION_REQUEST
});

export const collectionSuccess = (
  collections: Collection[]
): PhotosActionTypes => ({
  type: FETCH_COLLECTION_SUCCESS,
  payload: collections
});

export const collectionFailure = (error: any): PhotosActionTypes => ({
  type: FETCH_COLLECTION_FAILURE,
  payload: error
});

export const collectionPhotosRequested = (): PhotosActionTypes => ({
  type: FETCH_COLLECTION_PHOTOS_REQUEST
});

export const collectionPhotosSuccess = (
  photos: Image[]
): PhotosActionTypes => ({
  type: FETCH_COLLECTION_PHOTOS_SUCCESS,
  payload: photos
});

export const collectionPhotosFailure = (error: any): PhotosActionTypes => ({
  type: FETCH_COLLECTION_PHOTOS_FAILURE,
  payload: error
});

export const clearCollectionPhotos = (): PhotosActionTypes => ({
  type: CLEAR_COLLECTION_PHOTOS
});

export const photosRequested = (): PhotosActionTypes => ({
  type: FETCH_PHOTOS_REQUEST
});

export const photosLoaded = (photos: Image[]): PhotosActionTypes => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: photos
});

export const photosFailure = (error: any): PhotosActionTypes => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error
});

export const photoRequested = (): PhotosActionTypes => ({
  type: FETCH_PHOTO_REQUEST
});

export const photoLoaded = (photo: Image): PhotosActionTypes => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: photo
});

export const photoFailure = (error: any): PhotosActionTypes => ({
  type: FETCH_PHOTO_FAILURE,
  payload: error
});

export const clearPhoto = (): PhotosActionTypes => ({
  type: CLEAR_PHOTO
});

export const incPage = (): PhotosActionTypes => ({
  type: INC_PAGE
});



export const loadMoreRequest = (): PhotosActionTypes => ({
  type: LOAD_MORE_PHOTOS_REQUEST
});

export const loadMoreSuccess = (photos: Image[]): PhotosActionTypes => ({
  type: LOAD_MORE_PHOTOS_SUCCESS,
  payload: photos
});

export const loadMoreFailure = (error: any): PhotosActionTypes => ({
  type: LOAD_MORE_PHOTOS_FAILURE,
  payload: error
});

const fetchPhoto = (unsplashApiService: UnsplashApiService) => (id: string) => (
  dispatch: any
) => {
  dispatch(photoRequested);
  unsplashApiService
    .getPhoto(id)
    .then((data: Image) => dispatch(photoLoaded(data)));
};

const fetchPhotos = (unsplashApiService: UnsplashApiService) => () => (
  dispatch: any,
  getState: any
) => {
  const {
    photo: {
      photoList: { page, perPage, order }
    }
  } = getState();

  console.log(page, perPage, order);
  dispatch(photosRequested());
  unsplashApiService
    .getListPhotos(page, perPage, order)
    .then((data: Image[]) => dispatch(photosLoaded(data)));
};



const loadMorePhotos = (unsplashApiService: UnsplashApiService) => () => (
  dispatch: any,
  getState: any
) => {
  dispatch(incPage());
  dispatch(loadMoreRequest());
  const {
    photo: {
      photoList: { page, perPage, order }
    }
  } = getState();
  unsplashApiService
    .getListPhotos(page, perPage, order)
    .then((data: Image[]) => dispatch(loadMoreSuccess(data)));
};



const fetchCollections = (unsplashApiService: UnsplashApiService) => () => (
  dispatch: any,
  getState: any
) => {
  dispatch(collectionRequested());
  unsplashApiService
    .getCollectionList(1, 10, "popular")
    .then((data: Collection[]) => dispatch(collectionSuccess(data)));
};

const fetchCollectionPhotos = (unsplashApiService: UnsplashApiService) => (
  id: number,
  page: number,
  perPage: number,
  orderBy: OrderBy
) => (dispatch: any, getState: any) => {
  console.log(getState());

  dispatch(collectionPhotosRequested());
  unsplashApiService
    .getCollectionPhotos(id, page, perPage, orderBy)
    .then((data: Image[]) => dispatch(collectionPhotosSuccess(data)));
};

export {
  fetchPhotos,
  fetchPhoto,
  fetchCollections,
  fetchCollectionPhotos,
  loadMorePhotos
};
