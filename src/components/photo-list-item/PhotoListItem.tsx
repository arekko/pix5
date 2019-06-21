import React from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { Image as Photo } from "../../types";

const width = Dimensions.get("screen").width;

export function PhotoListItem({
  item,
  onPress
}: {
  item: Photo;
  onPress: (itemId: string) => void;
}): JSX.Element {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)} testID="photo-list-item">
      <Image
        source={{ uri: item.urls.small }}
        style={{
          backgroundColor: item.color,
          marginVertical: 5,
          marginHorizontal: 5,
          borderRadius: 15,
          width: width / 2 - 15,
          height: width / 1.5 - 20
        }}
      />
    </TouchableOpacity>
  );
}
