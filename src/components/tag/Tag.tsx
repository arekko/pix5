import React from "react";
import { Text, TouchableOpacity } from "react-native";

// Tags

export const Tag = ({ tag }: { tag: string }) => (
  <TouchableOpacity>
    <Text
      style={{
        backgroundColor: "#f8f8f8", // f5f5f5f
        color: "#333",
        borderRadius: 10,
        padding: 8,
        margin: 2
      }}
    >
      {tag}
    </Text>
  </TouchableOpacity>
);
