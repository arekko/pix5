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
import Spinner from "../components/spinner";
import withUnsplashService from "../hocs";
import { fetchCollections } from "../redux-store/actions/photoActions";
import { Collection } from "../types";

interface Props {
  collections: Collection[];
  loading: boolean;
  fetchCollections: any;
}

const screenWidth = Dimensions.get("window").width;

export const C: React.FC<Props> = ({
  collections,
  loading,
  fetchCollections
}) => {
  useEffect(() => {
    fetchCollections(1, 10, "popular");
  }, []);

  const { navigate } = useNavigation();

  const onPressCollection = (colId: number) => {
    navigate("CollectionPhotos", {
      colId: colId
    });
  };

  console.log(collections);

  return loading || !collections ? (
    <Spinner color="#ddd" type="9CubeGrid" />
  ) : (
    <FlatList
      data={collections}
      keyExtractor={item => `${item.id}`}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <TouchableOpacity onPress={() => onPressCollection(item.id)}>
            <Image
              source={{ uri: item.cover_photo!.urls.regular }}
              style={{
                width: screenWidth - 20,
                height: screenWidth / 1.5,
                borderRadius: 15
              }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "column", padding: 15 }}>
            <Text
              style={{
                fontSize: 16,
                color: "rgba(21,28,42,0.87)",
                lineHeight: 22,
                fontWeight: "bold",
                paddingVertical: 5
              }}
            >
              {item.title}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 15,
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
    />
  );
};

const mapStateToProps = ({ photo }: any) => ({
  collections: photo.collections,
  loading: photo.loading
});

const mapDispatchToProps = (dispatch: any, { unsplashApiService }: any) =>
  bindActionCreators(
    { fetchCollections: fetchCollections(unsplashApiService) },
    dispatch
  );

export const CollectionContainer = compose(
  withUnsplashService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(C);
