import React, { useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { PhotoList } from "../components/photoList/PhotoList";
import Spinner from "../components/spinner";
import withUnsplashService from "../hocs";
import { fetchPhotos } from "../redux-store/actions/photoActions";

interface Props {
  photos: Image[];
  loading: boolean;
  fetchPhotos: any;
}

export const P: React.FC<Props> = ({ photos, loading, fetchPhotos }) => {
  useEffect(() => {
    fetchPhotos(1, 30, "popular");
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
    <PhotoList data={photos} onPress={onPressPhoto} />
  );
};

const mapStateToProps = ({ photo }: any) => ({
  photos: photo.photos,
  loading: photo.loading
});

const mapDispatchToProps = (dispatch: any, { unsplashApiService }: any) =>
  bindActionCreators(
    { fetchPhotos: fetchPhotos(unsplashApiService) },
    dispatch
  );

export const PhotoContainer = compose(
  withUnsplashService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(P);
