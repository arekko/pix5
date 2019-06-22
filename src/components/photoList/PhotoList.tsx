import * as React from "react";
import { FlatList, View } from "react-native";
import FooterSpinner from "../footer-spinner";
import PhotoListItem from "../photo-list-item";
import { PhotoListProps } from "./types";

export const PhotoList: React.FC<PhotoListProps> = ({
  data,
  onPress,
  headerComponent,
  loadingMore = false,
  loadMore = () => []
}) => {
  return (
    <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
      <FlatList
        contentContainerStyle={{ marginHorizontal: 5 }}
        data={data}
        numColumns={2}
        ListHeaderComponent={headerComponent ? headerComponent : null}
        keyExtractor={(item, i) => `${item.id}${i}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <PhotoListItem item={item} onPress={onPress} />
        )}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        ListFooterComponent={<FooterSpinner loadingMore={loadingMore} />}
      />
    </View>
  );
};
