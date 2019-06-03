import * as React from "react";
import { Dimensions } from "react-native";
import Image from "react-native-scalable-image";
import { useNavigationParam } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import Spinner from "../components/spinner";
import withUnsplashService from "../hocs";
import {
  clearCollectionPhotos,
  fetchPhoto
} from "../redux-store/actions/photoActions";
import { Image as Photo } from "../types";

const screenWidth = Dimensions.get("screen").width;

interface IDetailImageProps {
  photo: Photo;
  fetchPhoto: any;
  loading: boolean;
  clearPhoto: any;
}

export const D: React.FC<IDetailImageProps> = ({
  photo,
  fetchPhoto,
  loading,
  clearPhoto
}) => {
  const photoId = useNavigationParam("photoId");

  React.useEffect(() => {
    fetchPhoto(photoId);
    return () => clearCollectionPhotos();
  }, []);

  return loading || !photo ? (
    <Spinner color="#ddd" type="9CubeGrid" />
  ) : (
    <Image
      source={{ uri: photo.urls.regular }}
      width={screenWidth}
      style={{ minHeight: screenWidth / 2 }}
    />
  );
};

const mapStateToProps = ({ photo }: any) => ({
  photo: photo.photo,
  loading: photo.loading
});

const mapDispatchToProps = (dispatch: any, { unsplashApiService }: any) =>
  bindActionCreators(
    { fetchPhoto: fetchPhoto(unsplashApiService), clearCollectionPhotos },
    dispatch
  );

export const DetailImage = compose(
  withUnsplashService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(D);
