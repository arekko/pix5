import React from "react";
import { Image } from "react-native";
import { useNavigationParam, useNavigation } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { PhotoList } from "../components/photoList/PhotoList";
import Spinner from "../components/spinner";
import withUnsplashService from "../hocs";
import {
  clearCollectionPhotos,
  fetchCollectionPhotos
} from "../redux-store/actions/photoActions";

interface Props {
  collectionPhotos: Image[];
  loading: boolean;
  fetchCollectionPhotos: any;
  clearCollectionPhotos: any;
}

export const P: React.FC<Props> = ({
  collectionPhotos,
  loading,
  fetchCollectionPhotos,
  clearCollectionPhotos
}) => {
  const colId = useNavigationParam("colId");

  React.useEffect(() => {
    fetchCollectionPhotos(colId, 1, 15, "popular");
    return () => clearCollectionPhotos();
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
    <PhotoList data={collectionPhotos} onPress={onPressPhoto} />
  );
};

const mapStateToProps = ({ photo }: any) => ({
  collectionPhotos: photo.collectionPhotos,
  loading: photo.loading
});

const mapDispatchToProps = (dispatch: any, { unsplashApiService }: any) =>
  bindActionCreators(
    {
      fetchCollectionPhotos: fetchCollectionPhotos(unsplashApiService),
      clearCollectionPhotos
    },
    dispatch
  );

export const CollectionPhotos = compose(
  withUnsplashService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(P);
