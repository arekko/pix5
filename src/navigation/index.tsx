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
        title: "PIXR",
        headerTitleStyle: {
          fontFamily: "Anurati-Regular",
          fontWeight: null,
          fontSize: 18
        }
      }
    },
    DetailImage: DetailImage,
    CollectionPhotos: CollectionPhotos,
    Profile: Profile
  },
  {
    headerLayoutPreset: "center", // default is 'left'

    defaultNavigationOptions: {
      headerStyle: {
        borderBottomColor: "transparent",
        elevation: 0 // for android,
        // horizontalPadding: 40,
      },

      headerBackTitle: null
    }
  }
);

export default createAppContainer(tempNav);
