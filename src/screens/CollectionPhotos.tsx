import React from "react";
import { Image } from "react-native";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import HeaderTitle from "../components/header-title";
import { PhotoList } from "../components/photoList/PhotoList";
import Spinner from "../components/spinner";
import withUnsplashService from "../hocs";
import {
  clearCollectionPhotos,
  clearPhoto,
  fetchCollectionPhotos,
  fetchMoreCollectionPhotos
} from "../redux-store/actions/photoActions";

interface Props {
  collectionPhotos: Image[];
  loading: boolean;
  fetchCollectionPhotos: any;
  clearCollectionPhotos: any;
  fetchMoreCollectionPhotos: any;
  clearPhoto: any;
}

export const P: React.FC<Props> = ({
  collectionPhotos,
  loading,
  fetchCollectionPhotos,
  clearCollectionPhotos,
  fetchMoreCollectionPhotos,
  clearPhoto
}) => {
  const colId = useNavigationParam("colId");
  const collectionAuthor = useNavigationParam("author");
  const collectionTitle = useNavigationParam("title");

  React.useEffect(() => {
    fetchCollectionPhotos(colId);
    return () => clearCollectionPhotos();
  }, [colId]);

  const { navigate } = useNavigation();

  const onPressPhoto = (photoId: string) => {
    navigate("DetailImage", {
      photoId: photoId
    });
  };

  const fetchMorePhotos = () => fetchMoreCollectionPhotos({ id: colId });

  return loading ? (
    <Spinner color="#ddd" type="9CubeGrid" />
  ) : (
    <PhotoList
      data={collectionPhotos}
      onPress={onPressPhoto}
      loadMore={fetchMorePhotos}
      headerComponent={
        <HeaderTitle
          title={collectionTitle}
          subtitle={`created by ${collectionAuthor}`}
        />
      }
    />
  );
};

const mapStateToProps = ({ photo }: any) => ({
  collectionPhotos: photo.collectionPhotos.collectionPhotos,
  loading: photo.collectionPhotos.loading
});

const mapDispatchToProps = (dispatch: any, { unsplashApiService }: any) =>
  bindActionCreators(
    {
      fetchCollectionPhotos: fetchCollectionPhotos(unsplashApiService),
      fetchMoreCollectionPhotos: fetchMoreCollectionPhotos(unsplashApiService),
      clearCollectionPhotos,
      clearPhoto
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
