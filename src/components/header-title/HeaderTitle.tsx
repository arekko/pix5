import React from "react";
import { Text, View } from "react-native";

export const HeaderTitle = ({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) => (
  <View style={{ padding: 20 }}>
    <Text testID="title" style={{ fontSize: 32, color: "rgba(21,28,42,0.87)" }}>
      {title}
    </Text>
    <Text testID="subtitle" style={{ marginVertical: 5 }}>
      {subtitle}
    </Text>
  </View>
);
