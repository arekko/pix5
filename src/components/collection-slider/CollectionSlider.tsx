import * as React from "react";
import { FlatList } from "react-native";
import { Collection } from "../../types";
import CollectionCover from "../collection-cover";

interface Props {
  data: Collection[];
  styles?: any;
}

export const CollectionSlider: React.FC<Props> = ({ data, styles = {} }) => {
  return (
    <FlatList
      style={{ ...styles }}
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      scrollEnabled
      keyExtractor={(item, i) => `${item.id}${i}`}
      snapToAlignment="center"
      renderItem={({ item }: { item: Collection }) => (
        <CollectionCover collection={item} onPress={() => {}} />
      )}
    />
  );
};
