import UnsplashApiService from "../../services/unsplashApiService";
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
  FETCH_MORE_COLLECTIONS_FAILURE,
  FETCH_MORE_COLLECTIONS_PHOTOS_FAILURE,
  FETCH_MORE_COLLECTIONS_PHOTOS_REQUEST,
  FETCH_MORE_COLLECTIONS_PHOTOS_SUCCESS,
  FETCH_MORE_COLLECTIONS_REQUEST,
  FETCH_MORE_COLLECTIONS_SUCCESS,
  FETCH_PHOTO_FAILURE,
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_SUCCESS,
  INC_PAGE,
  LOAD_MORE_PHOTOS_FAILURE,
  LOAD_MORE_PHOTOS_REQUEST,
  LOAD_MORE_PHOTOS_SUCCESS,
  PhotosActionTypes,
  SET_COLLECTION_PAGE,
  SET_COLLECTION_PHOTOS_PAGE
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

export const setCollectionPage = (page: number) => ({
  type: SET_COLLECTION_PAGE,
  payload: page
});

export const setCollectionPhotosPage = (page: number) => ({
  type: SET_COLLECTION_PHOTOS_PAGE,
  payload: page
});

export const fetchMoreCollectionsRequest = () => ({
  type: FETCH_MORE_COLLECTIONS_REQUEST
});

export const fetchMoreCollectionsSuccess = (collections: Collection[]) => ({
  type: FETCH_MORE_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchMoreCollectionsFailure = (error: any) => ({
  type: FETCH_MORE_COLLECTIONS_FAILURE,
  payload: error
});

export const fetchMoreCollectionPhotosRequest = () => ({
  type: FETCH_MORE_COLLECTIONS_PHOTOS_REQUEST
});

export const fetchMoreCollectionPhotosSuccess = (photos: Image[]) => ({
  type: FETCH_MORE_COLLECTIONS_PHOTOS_SUCCESS,
  payload: photos
});

export const fetchMoreCollectionPhotosFailure = (error: any) => ({
  type: FETCH_MORE_COLLECTIONS_PHOTOS_FAILURE,
  payload: error
});

const fetchPhoto = (unsplashApiService: UnsplashApiService) => (id: string) => (
  dispatch: any
) => {
  dispatch(photoRequested);
  unsplashApiService
    .fetchPhoto({ id })
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

  dispatch(photosRequested());
  unsplashApiService
    .fetchPhotos({ page, perPage, order })
    .then((data: Image[]) => dispatch(photosLoaded(data)));
};

const fetchMorePhotos = (unsplashApiService: UnsplashApiService) => () => (
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

  console.log(page, order);

  unsplashApiService
    .fetchPhotos({ page, perPage, order })
    .then((data: Image[]) => dispatch(loadMoreSuccess(data)));
};

const fetchCollections = (unsplashApiService: UnsplashApiService) => () => (
  dispatch: any,
  getState: any
) => {
  const {
    photo: {
      collection: { page, perPage, order }
    }
  } = getState();

  dispatch(collectionRequested());
  unsplashApiService
    .fetchCollections({ page, perPage, order })
    .then((data: Collection[]) => dispatch(collectionSuccess(data)));
};

const fetchCollectionPhotos = (unsplashApiService: UnsplashApiService) => (
  id: number
) => (dispatch: any, getState: any) => {
  const {
    photo: {
      collectionPhotos: { page, perPage, order }
    }
  } = getState();

  dispatch(collectionPhotosRequested());

  unsplashApiService
    .fetchPhotosFromCollection({ id, page, perPage, order })
    .then((data: Image[]) => dispatch(collectionPhotosSuccess(data)));
};

const fetchMoreCollections = (unsplashApiService: UnsplashApiService) => () => (
  dispatch: any,
  getState: any
) => {
  const {
    photo: {
      collection: { page, perPage, order }
    }
  } = getState();

  const nextPage: number = page + 1;

  dispatch(setCollectionPage(nextPage));
  dispatch(fetchMoreCollectionsRequest());

  unsplashApiService
    .fetchCollections({ page: nextPage, perPage, order })
    .then((data: Collection[]) => dispatch(fetchMoreCollectionsSuccess(data)));
};

const fetchMoreCollectionPhotos = (unsplashApiService: UnsplashApiService) => ({
  id
}: {
  id: number;
}) => (dispatch: any, getState: any) => {
  const {
    photo: {
      collectionPhotos: { page, perPage, order }
    }
  } = getState();

  const nextPage: number = page + 1;

  dispatch(setCollectionPhotosPage(nextPage));
  dispatch(fetchMoreCollectionPhotosRequest());

  unsplashApiService
    .fetchPhotosFromCollection({ id, page: nextPage, perPage, order })
    .then((data: Image[]) => dispatch(fetchMoreCollectionPhotosSuccess(data)));
};
export {
  fetchPhotos,
  fetchPhoto,
  fetchCollections,
  fetchCollectionPhotos,
  fetchMorePhotos as loadMorePhotos,
  fetchMoreCollections,
  fetchMoreCollectionPhotos
};
