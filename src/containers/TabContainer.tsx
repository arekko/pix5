import * as React from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setTabIndex } from "../redux-store/actions/tabsActions";
import { PhotoContainer } from "./PhotoContainer";
import { CollectionContainer } from "./CollectionContainer";

interface Props {
  tabs: any;
  setIndex: any;
}

const SecondRoute = () => (
  <View style={[{ backgroundColor: "red", flex: 1 }]} />
);

export const T: React.FC<Props> = ({ tabs, setIndex }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabView
        swipeEnabled={true}
        navigationState={tabs}
        renderScene={SceneMap({
          latest: PhotoContainer,
          collection: CollectionContainer
        })}
        onIndexChange={index => setIndex(index)}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "#000" }}
            style={{ backgroundColor: "#fff" }}
            activeColor="#000"
            inactiveColor="#ddd"
            labelStyle={{ fontWeight: "bold", fontSize: 12 }}
            tabStyle={{height: 40}}
          />
        )}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({ tabs }: any) => ({
  tabs: tabs
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ setIndex: setTabIndex }, dispatch);

export const TabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(T);
