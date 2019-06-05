import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Image from "react-native-scalable-image";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { CollectionSlider } from "../components/collection-slider/CollectionSlider";
import ImageInfo from "../components/image-info";
import ImageStats from "../components/image-stats";
import Spinner from "../components/spinner";
import Tags from "../components/tags";
import withUnsplashService from "../hocs";
import { clearPhoto, fetchPhoto } from "../redux-store/actions/photoActions";
import { Image as Photo } from "../types";

const screenWidth = Dimensions.get("screen").width;

// Image Info

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
  const { navigate } = useNavigation();

  const onPressProfile = (username: string) => {
    navigate("Profile", {
      username: username
    });
  };

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
          downloads={photo.downloads ? photo.downloads : 0}
        />

        <TouchableOpacity
          style={{ padding: 15 }}
          onPress={() => onPressProfile(photo.user.username)}
        >
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
        </TouchableOpacity>

        <Tags tags={photo.tags ? photo.tags : null} />
        <ImageInfo
          info={{
            Dimensions: `${photo.width} x ${photo.height}`,
            Make: photo.exif!.make,
            Model: photo.exif!.model,
            "Exposure time": photo.exif!.exposure_time,
            Aperture: photo.exif!.aperture,
            Iso: photo.exif!.iso,
            "Focal length": photo.exif!.focal_length
          }}
        />
        <CollectionSlider
          data={photo.related_collections.results}
          styles={{ marginVertical: 15 }}
        />
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
