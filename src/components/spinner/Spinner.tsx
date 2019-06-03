import React from "react";
import { View } from "react-native";
import Loader from "react-native-spinkit";

interface Props {
  type?: string;
  isVisible?: boolean;
  color?: string;
  size?: number;
}

export const Spinner: React.FC<Props> = ({
  type = "Plane",
  isVisible = true,
  color = "#000000",
  size = 37
}) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Loader type={type} isVisible={isVisible} color={color} size={size} />
  </View>
);
