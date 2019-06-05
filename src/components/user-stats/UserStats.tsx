import React from "react";
import { Text, View } from "react-native";
// Image stats
export const UserStats = ({
  photos,
  followers,
  following
}: {
  photos: number;
  followers: number;
  following: number;
}) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      padding: 15
    }}
  >
    <View style={{ flexDirection: "column" }}>
      <Text>photos</Text>
      <Text style={{ marginLeft: 6 }}>{photos}</Text>
    </View>

    <View style={{ flexDirection: "column" }}>
      <Text>following</Text>
      <Text style={{ marginLeft: 6 }}>{followers}</Text>
    </View>

    <View style={{ flexDirection: "column" }}>
      <Text>followers</Text>
      <Text style={{ marginLeft: 6 }}>{following}</Text>
    </View>
  </View>
);
