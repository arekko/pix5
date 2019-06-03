import { View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Icon } from "react-native-vector-icons/Icon";
import React from "react";

const ControlPanel = ({ onPressList, onPressLargeGrid, onPressGrid }: any) => {
  return (
    <View style={{ flexDirection: "row", marginVertical: 15 }}>
      <TouchableOpacity onPress={onPressList}>
        <Icon
          name="list"
          size={30}
          style={{ paddingHorizontal: 7 }}
          color="#ddd"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLargeGrid}>
        <Icon
          name="th-large"
          size={30}
          style={{ paddingHorizontal: 7 }}
          color="#ddd"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressGrid}>
        <Icon
          name="th"
          size={30}
          style={{ paddingHorizontal: 7 }}
          color="#ddd"
        />
      </TouchableOpacity>
    </View>
  );
};
