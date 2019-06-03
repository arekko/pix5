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
  clearPhoto: any;
}

export const PhotoList: React.FC<Props> = ({ data, onPress }) => (
  <View style={{ flex: 1, alignItems: "center" }}>
    {
      <FlatList
        data={data}
        keyExtractor={(item, i) => `${item.id}${i}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <TouchableOpacity onPress={() => onPress(item.id)}>
            <Image
              source={{ uri: item.urls.small }}
              style={{
                backgroundColor: item.color,
                marginVertical: 10,
                // margin: 5,
                borderRadius: 15,
                width: width - 20,
                height: width - 20
              }}
            />
          </TouchableOpacity>
        )}
      />
    }
  </View>
);
