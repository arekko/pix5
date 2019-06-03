import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import Image from "react-native-scalable-image";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigationParam } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import Spinner from "../components/spinner";
import withUnsplashService from "../hocs";
import { clearPhoto, fetchPhoto } from "../redux-store/actions/photoActions";
import { Image as Photo } from "../types";

const screenWidth = Dimensions.get("screen").width;

const ImageStats = ({
  likes,
  downloads,
  date
}: {
  likes: number;
  downloads: number;
  date: string;
}) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      padding: 15
    }}
  >
    <View style={{ flexDirection: 'row'}}>
      <Icon name="calendar-range" size={18} />
      <Text>{date}</Text>
    </View>

    <View style={{ flexDirection: 'row'}}>
      <Icon name="cards-heart" size={18} />
      <Text>{likes}</Text>
    </View>

    <View style={{ flexDirection: 'row'}}>
      <Icon name="download" size={18} />
      <Text>{downloads}</Text>
    </View>
  </View>
);

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
    return () => clearPhoto();
  }, []);

  return loading || !photo ? (
    <Spinner color="#ddd" type="9CubeGrid" />
  ) : (
    <View>
      <ScrollView>
        <Image
          source={{ uri: photo.urls.regular }}
          width={screenWidth}
          style={{ minHeight: screenWidth / 2, backgroundColor: photo.color }}
        />
        <ImageStats
          date={photo.created_at}
          likes={photo.likes}
          downloads={photo.downloads ? photo.downloads : 0
          }
        />
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: photo.user.profile_image.medium }}
              width={50}
              height={50}
              style={{ borderRadius: 25 }}
            />
            <View style={{ flexDirection: "column", paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 17, color: "rgba(21,28,42,0.87)" }}>
                {photo.user.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text>{photo.user.total_photos} photos</Text>
                <Text style={{ marginHorizontal: 7 }}>•</Text>
                <Text>{photo.user.total_collections} collections</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({ photo }: any) => ({
  photo: photo.photo,
  loading: photo.loading
});

const mapDispatchToProps = (dispatch: any, { unsplashApiService }: any) =>
  bindActionCreators(
    { fetchPhoto: fetchPhoto(unsplashApiService), clearPhoto },
    dispatch
  );

export const DetailImage = compose(
  withUnsplashService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(D);
