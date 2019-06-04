import React from "react";
import { Text, View } from "react-native";

export const ImageInfo = ({ info }: { info: any }) => (
  <View>
    {Object.keys(info).map((key: any) => (
      <Text key={key}>{`${key}: ${info[key]}`}</Text>
    ))}
  </View>
);
