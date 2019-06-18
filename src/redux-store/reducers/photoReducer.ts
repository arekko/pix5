import { PhotoState } from "../constants";
import { createReducer, updateObject } from "./reducerUtilities";

const initialState: PhotoState = {
  collection: {
    collections: [],
    loading: false,
    error: undefined,
    page: 1,
    perPage: 5,
    order: "popular",
    loadingMore: false
  },
  collectionPhotos: {
    collectionPhotos: undefined,
    loading: false,
    error: undefined,
    page: 1,
    perPage: 15,
    order: "popular",
    loadingMore: false
  },
  photoList: {
    photos: [],
    loading: false,
    loadingMore: false,
    page: 1,
    perPage: 15,
    order: "latest",
    error: undefined
  },
  photoDetail: {
    photo: undefined,
    loading: false,
    error: undefined
  }
};

// collections
const fetchCollectionRequest = (state: PhotoState) =>
  updateObject(state, {
    collection: {
      ...state.collection,
      loading: true,
      error: null
    }
  });

const fetchCollectionSuccess = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collection: {
      ...state.collection,
      collections: payload,
      loading: false,
      error: null
    }
  });

const fetchCollectionFailure = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collection: {
      ...state.collection,
      loading: false,
      error: payload
    }
  });

const fetchCollectionPhotoRequest = (state: PhotoState) =>
  updateObject(state, {
    collectionPhotos: {
      ...state.collectionPhotos,
      loading: true,
      error: null
    }
  });

const fetchCollecitonPhotoSuccess = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collectionPhotos: {
      ...state.collectionPhotos,
      collectionPhotos: payload,
      loading: false,
      error: null
    }
  });

const fetchCollectionPhotoFailure = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collectionPhotos: {
      ...state.collectionPhotos,
      loading: false,
      error: payload
    }
  });

const clearCollectionPhotos = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collectionPhotos: {
      ...state.collectionPhotos,
      collectionPhotos: undefined,
      page: 1
    }
  });

/// -----

const fetchPhotosRequest = (state: PhotoState) => {
  console.log(state);

  return updateObject(state, {
    photoList: {
      ...state.photoList,
      loading: true,
      error: null
    }
  });
};

const fetchPhotosSuccess = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    photoList: {
      ...state.photoList,
      photos: payload,
      loading: false,
      error: null
    }
  });

const fetchPhotosFailure = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    photoList: {
      ...state.photoList,
      loading: false,
      error: payload
    }
  });
// ---
const fetchPhotoRequest = (state: PhotoState) =>
  updateObject(state, {
    photoDetail: {
      ...state.photoDetail,
      loading: true,
      error: null
    }
  });

const fetchPhotoSuccess = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    photoDetail: {
      ...state.photoDetail,
      photo: payload,
      loading: false,
      error: null
    }
  });

const fetchPhotoFailure = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    photoDetail: {
      ...state.photoDetail,
      loading: false,
      error: payload
    }
  });

const clearPhoto = (state: PhotoState) =>
  updateObject(state, {
    photoDetail: {
      ...state.photoDetail,
      photo: undefined
    }
  });

const incPage = (state: PhotoState) =>
  updateObject(state, {
    photoList: {
      ...state.photoList,
      page: state.photoList.page + 1
    }
  });

const loadMoreRequest = (state: PhotoState) => {
  console.log(state);

  return updateObject(state, {
    photoList: {
      ...state.photoList,
      loadingMore: true
    }
  });
};

const loadMoreSuccess = (state: PhotoState, { payload }: any) => {
  console.log(state);

  return updateObject(state, {
    photoList: {
      ...state.photoList,
      loadingMore: false,
      photos: [...state.photoList.photos, ...payload]
    }
  });
};

const loadMoreFailure = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    photoList: {
      ...state.photoList,
      loadingMore: false,
      error: payload
    }
  });

//ddddd
const setCollectionPage = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collection: {
      ...state.collection,
      page: payload
    }
  });

const setCollectionPhotosPage = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collectionPhotos: {
      ...state.collectionPhotos,
      page: payload
    }
  });

const fetchMoreCollectionsRequest = (state: PhotoState) => {
  return updateObject(state, {
    collection: {
      ...state.collection,
      loadingMore: true
    }
  });
};

const fetchMoreCollectionPhotosRequest = (state: PhotoState) => {
  return updateObject(state, {
    collectionPhotos: {
      ...state.collectionPhotos,
      loadingMore: true
    }
  });
};

const fetchMoreCollectionSuccess = (state: PhotoState, { payload }: any) => {
  return updateObject(state, {
    collection: {
      ...state.collection,
      loadingMore: false,
      collections: [...state.collection.collections, ...payload]
    }
  });
};

const fetchMoreCollectionPhotosSuccess = (
  state: PhotoState,
  { payload }: any
) => {
  return updateObject(state, {
    collectionPhotos: {
      ...state.collectionPhotos,
      loadingMore: false,
      collectionPhotos: [
        ...state.collectionPhotos.collectionPhotos!,
        ...payload
      ]
    }
  });
};

//TODO: make failure

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
  CLEAR_PHOTO: clearPhoto,
  INC_PAGE: incPage,
  LOAD_MORE_PHOTOS_SUCCESS: loadMoreSuccess,
  LOAD_MORE_PHOTOS_REQUEST: loadMoreRequest,
  LOAD_MORE_PHOTOS_FAILURE: loadMoreFailure,
  SET_COLLECTION_PAGE: setCollectionPage,
  SET_COLLECTION_PHOTOS_PAGE: setCollectionPhotosPage,
  FETCH_MORE_COLLECTIONS_REQUEST: fetchMoreCollectionsRequest,
  FETCH_MORE_COLLECTIONS_SUCCESS: fetchMoreCollectionSuccess,
  FETCH_MORE_COLLECTIONS_PHOTOS_REQUEST: fetchMoreCollectionPhotosRequest,
  FETCH_MORE_COLLECTIONS_PHOTOS_SUCCESS: fetchMoreCollectionPhotosSuccess
});
