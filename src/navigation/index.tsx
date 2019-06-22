import { createAppContainer, createStackNavigator } from "react-navigation";
import { CollectionPhotos } from "../screens/CollectionPhotos";
import { DetailImage } from "../screens/DetailImage";
import { Feed } from "../screens/Feed";
import { Profile } from "../screens/Profile";

const tempNav = createStackNavigator(
  {
    Main: {
      screen: Feed,
      navigationOptions: {
        // header: null // hide header,
        title: "GLAA",
        headerTitleStyle: {
          fontFamily: "Anurati-Regular",
          fontWeight: null,
          fontSize: 14
        }
      }
    },
    DetailImage: DetailImage,
    CollectionPhotos: CollectionPhotos,
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile",
        headerTitleStyle: {
          fontSize: 16
        }
      }
    }
  },
  {
    headerLayoutPreset: "center", // default is 'left'

    defaultNavigationOptions: {
      headerStyle: {
        borderBottomColor: "transparent",
        elevation: 0, // for android,
        // horizontalPadding: 40,
        height: 40
      },

      headerBackTitle: null
    }
  }
);

export default createAppContainer(tempNav);
