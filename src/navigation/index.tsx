import { createAppContainer, createStackNavigator } from "react-navigation";
import { CollectionPhotos } from "../screens/CollectionPhotos";
import { DetailImage } from "../screens/DetailImage";
import { Feed } from "../screens/Feed";

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
          fontSize: 25
        }
      }
    },
    DetailImage: DetailImage,
    CollectionPhotos: CollectionPhotos
  },
  {
    headerLayoutPreset: "center", // default is 'left'

    defaultNavigationOptions: {
      headerStyle: {
        borderBottomColor: "transparent",
        elevation: 0, // for android,
        horizontalPadding: 40
      },

      headerBackTitle: null
    }
  }
);

export default createAppContainer(tempNav);
