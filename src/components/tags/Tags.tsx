import React from "react";
import { View, ViewStyle } from "react-native";
import { ITag } from "../../types";
import Tag from "../tag";

export const Tags = ({ tags, styles = {}}: { tags: ITag[] | null, styles?: ViewStyle  }) => {
  return (
    <View
      testID="tags-container"
      style={{
        padding: 15,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        ...styles
      }}
    >
      {tags && tags.map((tag: ITag) => <Tag key={tag.title} tag={tag.title} />)}
    </View>
  );
};
