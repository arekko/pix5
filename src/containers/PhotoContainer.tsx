import React, { useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import HeaderTitle from "../components/header-title";
import { PhotoList } from "../components/photoList/PhotoList";
import Spinner from "../components/spinner";
import withUnsplashService from "../hocs";
import {
  fetchPhotos,
  loadMorePhotos
} from "../redux-store/actions/photoActions";

interface Props {
  photos: Image[];
  loading: boolean;
  fetchPhotos: any;
  loadMore: any;
  loadingMore: boolean;
}

export const P: React.FC<Props> = ({
  photos,
  loading,
  fetchPhotos,
  loadMore,
  loadingMore
}) => {
  useEffect(() => {
    fetchPhotos();
  }, []);

  const { navigate } = useNavigation();

  const onPressPhoto = (photoId: string) => {
    navigate("DetailImage", {
      photoId: photoId
    });
  };

  return loading ? (
    <Spinner color="#ddd" type="9CubeGrid" />
  ) : (
    <PhotoList
      loadMore={loadMore}
      loadingMore={loadingMore}
      data={photos}
      onPress={onPressPhoto}
      headerComponent={
        <HeaderTitle
          title="Explore"
          subtitle="Explore the world through beautiful HD pictures"
        />
      }
    />
  );
};

const mapStateToProps = ({ photo }: any) => ({
  photos: photo.photoList.photos,
  loading: photo.photoList.loading,
  loadingMore: photo.photoList.loadingMore
});

const mapDispatchToProps = (dispatch: any, { unsplashApiService }: any) =>
  bindActionCreators(
    {
      fetchPhotos: fetchPhotos(unsplashApiService),
      loadMore: loadMorePhotos(unsplashApiService)
    },
    dispatch
  );

export const PhotoContainer = compose(
  withUnsplashService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(P);
