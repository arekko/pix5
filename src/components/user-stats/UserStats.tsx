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
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Text>photos</Text>
      <Text style={{ fontSize: 14, fontWeight: "600" }}>{photos}</Text>
    </View>

    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Text>following</Text>
      <Text style={{ fontSize: 14, fontWeight: "600" }}>{followers}</Text>
    </View>

    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Text>followers</Text>
      <Text style={{ fontSize: 14, fontWeight: "600" }}>{following}</Text>
    </View>
  </View>
);
