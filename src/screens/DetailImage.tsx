import * as React from "react";
import { useReducer } from "react";
import {
  Alert,
  Dimensions,
  Linking,
  PermissionsAndroid,
  ScrollView,
  Share,
  Text,
  ToastAndroid,
  View
} from "react-native";
import RNFetchBlob from "react-native-fetch-blob";
import { TouchableOpacity } from "react-native-gesture-handler";
import Image from "react-native-scalable-image";
import WallPaperManager from "react-native-wallpaper-manager";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { CollectionSlider } from "../components/collection-slider/CollectionSlider";
import HeaderTitle from "../components/header-title";
import ImageStats from "../components/image-stats";
import Spinner from "../components/spinner";
import Tags from "../components/tags";
import TouchableIcon from "../components/touchable-icon";
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
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { loading: false, prgress: 0 }
  );

  const photoId = useNavigationParam("photoId");
  const { navigate } = useNavigation();

  const onPressProfile = (username: string) => {
    navigate("Profile", {
      username: username
    });
  };

  const onPressCollection = ({
    colId,
    title,
    author
  }: {
    colId: number;
    title: string;
    author: string;
  }) => {
    console.log(colId, title, author);

    navigate("CollectionPhotos", {
      colId: colId,
      title,
      author
    });
  };

  React.useEffect(() => {
    fetchPhoto(photoId);
    return () => {
      console.log("unmount");

      clearPhoto();
    };
  }, [photoId]);

  const onShare = () => {
    Share.share({
      message: photo.links.html
    });
  };

  const setWallpaper = (source: string, callback: any) => {
    WallPaperManager.setWallpaper({ uri: source }, callback);
  };

  const downloadImage = (source: string) => Linking.openURL(source);

  const actualDownload = () => {
    const android = RNFetchBlob.android;

    let ext: any = extention(photo.links.download);
    ext = "." + ext[0];

    setState({
      progress: 0,
      loading: true
    });
    let dirs = RNFetchBlob.fs.dirs;
    let PictureDir = RNFetchBlob.fs.dirs.PictureDir;
    var date = new Date();

    RNFetchBlob.config({
      addAndroidDownloads: {
        path: PictureDir + `/PIX/image_${photo.id}.png`,
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        mime: "application/vnd.android.package-archive"
      },
      fileCache: true
    })
      .fetch("GET", photo.links.download)
      // .progress((received: any, total: any) => {
      //   console.log("i am here");

      //   console.log("progress", received / total);
      //   setState({ progress: received / total });
      // })
      .then((res: any) => {
        android.actionViewIntent(
          res.path(),
          "application/vnd.android.package-archive"
        );
        console.log(res.path());

        setState({
          progress: 100,
          loading: false
        });
        ToastAndroid.showWithGravity(
          "Your file has been downloaded to downloads folder!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      });
  };

  const downloadFile = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission",
          message: "App needs access to memory to download the file ",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        actualDownload();
      } else {
        Alert.alert(
          "Permission Denied!",
          "You need to give storage permission to download the file"
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const extention = (filename: string) => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  return loading || !photo ? (
    <Spinner color="#ddd" type="9CubeGrid" />
  ) : (
    <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <ScrollView>
        <Image
          source={{ uri: photo.urls.regular }}
          width={screenWidth}
          style={{
            maxHeight: "100%",
            backgroundColor: photo.color
          }}
        />

        <View>
          <View
            style={{
              padding: 10,
              flex: 1,
              flexDirection: "row",
              backgroundColor: "#fff",
              justifyContent: "space-around"
            }}
          >
            <TouchableIcon
              name="cloud-download-outline"
              size={25}
              onPress={() => downloadFile()}
            />
            <TouchableIcon
              name="wallpaper"
              size={25}
              onPress={() =>
                setWallpaper(photo.links.download, () =>
                  Alert.alert("Wallpaper was successfully setted")
                )
              }
            />
            <TouchableIcon name="share-variant" size={25} onPress={onShare} />
          </View>

          {state.loading ? <Text>{state.progress}</Text> : null}

          <TouchableOpacity
            style={{
              padding: 15,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              marginBottom: 10,
              backgroundColor: "#fff"
            }}
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

          <ImageStats
            styles={{
              // borderTopLeftRadius: 20,
              // borderTopRightRadius: 20,
              // borderBottomRightRadius: 20,
              // borderBottomLeftRadius: 20,
              // marginTop: -20,
              backgroundColor: "#fafafa",
              paddingHorizontal: 20
            }}
            date={photo.created_at}
            likes={photo.likes}
            downloads={photo.downloads ? photo.downloads : 0}
          />

          <Tags
            tags={photo.tags ? photo.tags : null}
            styles={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }}
          />
          {/* <ImageInfo
          info={{
            Dimensions: `${photo.width} x ${photo.height}`,
            Make: photo.exif!.make,
            Model: photo.exif!.model,
            "Exposure time": photo.exif!.exposure_time,
            Aperture: photo.exif!.aperture,
            Iso: photo.exif!.iso,
            "Focal length": photo.exif!.focal_length
          }}
        /> */}
          <HeaderTitle
            title="Related collections"
            subtitle="Check more related photos"
          />
          <CollectionSlider
            data={photo.related_collections.results}
            styles={{ marginVertical: 15 }}
            onPressCollection={onPressCollection}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({ photo }: any) => ({
  photo: photo.photoDetail.photo,
  loading: photo.photoDetail.loading
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
