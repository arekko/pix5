import React, { useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import FooterSpinner from "../components/footer-spinner";
import HeaderTitle from "../components/header-title";
import Spinner from "../components/spinner";
import withUnsplashService from "../hocs";
import {
  fetchCollections,
  fetchMoreCollections
} from "../redux-store/actions/photoActions";
import { Collection } from "../types";

interface Props {
  collections: Collection[];
  loading: boolean;
  fetchCollections: any;
  fetchMoreCollections: any;
  loadingMore: boolean;
}

const screenWidth = Dimensions.get("window").width;

export const C: React.FC<Props> = ({
  collections,
  loading,
  fetchCollections,
  fetchMoreCollections,
  loadingMore
}) => {
  useEffect(() => {
    fetchCollections();
  }, []);

  const { navigate } = useNavigation();

  const onPressCollection = ({
    colId,
    title,
    author
  }: {
    colId: number;
    title: string;
    author: string;
  }) => {
    navigate("CollectionPhotos", {
      colId: colId,
      title,
      author
    });
  };

  return loading || !collections ? (
    <Spinner color="#ddd" type="9CubeGrid" />
  ) : (
    <FlatList
      data={collections}
      keyExtractor={item => `${item.id}`}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <TouchableOpacity
            onPress={() =>
              onPressCollection({
                colId: item.id,
                title: item.title,
                author: item.user.username
              })
            }
          >
            <Image
              source={{ uri: item.cover_photo!.urls.regular }}
              style={{
                width: screenWidth - 20,
                height: 180,
                borderRadius: 15
              }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "column", padding: 10 }}>
            <Text
              style={{
                fontSize: 15,
                color: "rgba(21,28,42,0.87)",
                lineHeight: 22,
                fontWeight: "bold",
                paddingVertical: 2
              }}
            >
              {item.title}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#999"
                }}
              >
                {item.total_photos} photos
              </Text>
              <Text
                style={{ fontSize: 15, color: "#999", paddingHorizontal: 5 }}
              >
                Curated by
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 15, color: "#555" }}>
                  {item.user.name}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      ListHeaderComponent={
        <HeaderTitle
          title="Collections"
          subtitle="Explore the world through collections of beautiful HD pictures"
        />
      }
      onEndReached={() => fetchMoreCollections()}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      ListFooterComponent={<FooterSpinner loadingMore={loadingMore} />}
    />
  );
};

const mapStateToProps = ({ photo }: any) => ({
  collections: photo.collection.collections,
  loading: photo.collection.loading,
  loadingMore: photo.collection.loadingMore
});

const mapDispatchToProps = (dispatch: any, { unsplashApiService }: any) =>
  bindActionCreators(
    {
      fetchCollections: fetchCollections(unsplashApiService),
      fetchMoreCollections: fetchMoreCollections(unsplashApiService)
    },
    dispatch
  );

export const CollectionContainer = compose(
  withUnsplashService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(C);
