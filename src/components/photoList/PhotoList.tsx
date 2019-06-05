import * as React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View
} from "react-native";
import { Image as Photo } from "../../types";
const width = Dimensions.get("screen").width;

interface Props {
  data: Photo[];
  onPress: (id: string) => void;
  headerComponent?: any;
  loadingMore: boolean;
  loadMore: any;
}

export const PhotoList: React.FC<Props> = ({
  data,
  onPress,
  headerComponent,
  loadingMore,
  loadMore
}) => (
  <View style={{ flex: 1, alignItems: "center" }}>
    {
      <FlatList
        data={data}
        numColumns={2}
        ListHeaderComponent={headerComponent ? headerComponent : null}
        keyExtractor={(item, i) => `${item.id}${i}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <TouchableOpacity onPress={() => onPress(item.id)}>
            <Image
              source={{ uri: item.urls.small }}
              style={{
                backgroundColor: item.color,
                marginVertical: 5,
                margin: 5,
                borderRadius: 15,
                width: width / 2 - 20,
                height: width / 1.5 - 20
              }}
            />
          </TouchableOpacity>
        )}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
    }
  </View>
);
