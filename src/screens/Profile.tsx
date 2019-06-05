import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigationParam } from "react-navigation-hooks";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import Spinner from "../components/spinner";
import UserStats from "../components/user-stats";
import withUnsplashService from "../hocs";
import { clearUser, fetchUser } from "../redux-store/actions/userActions";
import { User } from "../types";

interface Props {
  user: User;
  loading: boolean;
  fetchUser: any;
  clearUser: any;
 }

const PF: React.FC<Props> = ({ user, fetchUser, loading, clearUser }) => {
  const username = useNavigationParam("username");

  React.useEffect(() => {
    fetchUser(username);
    return () => clearUser();
  }, []);

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
    </ScrollView>
  );
};



const mapStateToProps = ({ user }: any) => ({
  user: user.user,
  loading: user.loading
});

const mapDispatchToProps = (dispatch: any, { unsplashApiService }: any) =>
  bindActionCreators(
    { fetchUser: fetchUser(unsplashApiService), clearUser },
    dispatch
  );

export const Profile = compose(
  withUnsplashService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PF);
