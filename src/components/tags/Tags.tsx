import React from "react";
import { View } from "react-native";
import { ITag } from "../../types";
import Tag from "../tag";

export const Tags = ({ tags }: { tags: ITag[] | null }) => {
  return (
    <View
      style={{
        padding: 15,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
      }}
    >
      {tags && tags.map((tag: ITag) => <Tag key={tag.title} tag={tag.title} />)}
    </View>
  );
};
