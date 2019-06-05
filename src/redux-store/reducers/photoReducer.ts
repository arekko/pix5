import { PhotoState } from "../constants";
import { createReducer, updateObject } from "./reducerUtilities";

const initialState: PhotoState = {
  collection: {
    collections: [],
    collectionPhotos: undefined,
    loading: false,
    error: undefined
  },
  photoList: {
    photos: [],
    loading: false,
    loadingMore: false,
    page: 1,
    perPage: 15,
    order: "popular",
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
    collection: {
      ...state.collection,
      loading: true,
      error: null
    }
  });

const fetchCollecitonPhotoSuccess = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collection: {
      ...state.collection,
      collectionPhotos: payload,
      loading: false,
      error: null
    }
  });

const fetchCollectionPhotoFailure = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collection: {
      ...state.collection,
      loading: false,
      error: payload
    }
  });

const clearCollectionPhotos = (state: PhotoState, { payload }: any) =>
  updateObject(state, {
    collection: {
      collectionPhotos: undefined
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
  LOAD_MORE_PHOTOS_FAILURE: loadMoreFailure
});
