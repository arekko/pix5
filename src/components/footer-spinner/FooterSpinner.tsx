import React from "react";
import { View } from "react-native";
import Spinner from "../spinner";

export const FooterSpinner = ({ loadingMore }: { loadingMore: boolean }) => {
  return loadingMore ? (
    <View style={{ padding: 10 }}>
      <Spinner color="#ddd" type="9CubeGrid" />
    </View>
  ) : null;
};
