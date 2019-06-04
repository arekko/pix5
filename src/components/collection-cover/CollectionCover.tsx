import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Collection } from "../../types";

const screenWidth = Dimensions.get("screen").width;

// Related colleciton cover

export const CollectionCover = ({
  collection,
  onPress
}: {
  collection: Collection;
  onPress: (id: number) => void;
}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: "center",
        width: screenWidth
      }}
      onPress={() => onPress(collection.id)}
    >
      <View style={{position: 'relative', width: screenWidth - 30}}>
        <Image
          source={{ uri: collection.cover_photo!.urls.small }}
          style={{
            width: screenWidth - 30,
            height: 180,
            borderRadius: 15,
            backgroundColor: collection.cover_photo!.color
          }}
        />
        <Text
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: screenWidth - 30,
            backgroundColor: "rgba(0,0,0,.3)",
            borderRadius: 15,
            overflow: "hidden",
            color: "#fff",
            padding: 15,
            textAlign: "center"
          }}
        >
          {collection.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
