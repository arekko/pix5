import moment from "moment";
import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// Image stats
export const ImageStats = ({
  likes,
  downloads,
  date,
  styles = {}
}: {
  likes: number;
  downloads: number;
  date: string;
  styles?: any;
}) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      padding: 15,
      ...styles
    }}
  >
    <View style={{ flexDirection: "row" }}>
      <Icon name="calendar-range" size={18} />
      <Text testID="date" style={{ marginLeft: 6 }}>
        {moment(date).format("YYYY-MM-DD")}
      </Text>
    </View>

    <View style={{ flexDirection: "row" }}>
      <Icon name="cards-heart" size={18} />
      <Text testID="likes" style={{ marginLeft: 6 }}>
        {likes}
      </Text>
    </View>

    <View style={{ flexDirection: "row" }}>
      <Icon name="download" size={18} />
      <Text testID="downloads" style={{ marginLeft: 6 }}>
        {downloads}
      </Text>
    </View>
  </View>
);
