import { createAppContainer, createStackNavigator } from "react-navigation";
import { DetailImage } from "../screens/DetailImage";
import { Feed } from "../screens/Feed";
import { CollectionPhotos } from "../screens/CollectionPhotos";

const tempNav = createStackNavigator(
  {
    Main: {
      screen: Feed,
      navigationOptions: {
        header: null // hide header
      }
    },
    DetailImage: DetailImage,
    CollectionPhotos: CollectionPhotos
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomColor: "transparent",
        elevation: 0 // for android,
      },
      headerBackTitle: null
    }
  }
);

export default createAppContainer(tempNav);
