import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { PhotoList } from "../components/photoList/PhotoList";
import Spinner from "../components/spinner";
import UserStats from "../components/user-stats";
import withUnsplashService from "../hocs";
import {
  clearUser,
  fetchUser,
  fetchUserPhotos
} from "../redux-store/actions/userActions";
import { User } from "../types";

interface Props {
  user: User;
  loading: boolean;
  fetchUser: any;
  clearUser: any;
  userPhotos: any;
  userPhotosLoading: any;
  fetchUserPhotos: any;
}

const PF: React.FC<Props> = ({
  user,
  fetchUser,
  loading,
  clearUser,
  userPhotos,
  userPhotosLoading,
  fetchUserPhotos
}) => {
  const username = useNavigationParam("username");

  const { navigate } = useNavigation();

  const onPressPhoto = (photoId: string) => {
    navigate("DetailImage", {
      photoId: photoId
    });
  };

  React.useEffect(() => {
    fetchUser(username);
    fetchUserPhotos(username);
    return () => clearUser();
  }, [username]);

  return loading || !user ? (
    <Spinner color="#ddd" type="9CubeGrid" />
  ) : (
    <ScrollView>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fafafa",
          paddingVertical: 15
        }}
      >
        <Image
          source={{ uri: user.profile_image.large }}
          style={{ width: 150, height: 150, borderRadius: 75 }}
        />
        <View style={{ marginVertical: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{user.name}</Text>
          <Text>{user.username}</Text>
        </View>
      </View>
      <UserStats
        followers={user.followers_count}
        following={user.following_count}
        photos={user.total_photos}
      />
      {userPhotosLoading || !userPhotos ? (
        <Spinner color="#ddd" type="9CubeGrid" />
      ) : (
        <PhotoList
          data={userPhotos}
          onPress={onPressPhoto}
        />
      )}
    </ScrollView>
  );
};

const mapStateToProps = ({ user }: any) => ({
  user: user.user,
  loading: user.loading,
  userPhotos: user.userPhotos.userPhotos,
  userPhotosLoading: user.userPhotos.userPhotosLoading
});

const mapDispatchToProps = (dispatch: any, { unsplashApiService }: any) =>
  bindActionCreators(
    {
      fetchUser: fetchUser(unsplashApiService),
      clearUser,
      fetchUserPhotos: fetchUserPhotos(unsplashApiService)
    },
    dispatch
  );

export const Profile = compose(
  withUnsplashService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PF);
