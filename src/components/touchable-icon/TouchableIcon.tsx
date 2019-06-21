import * as React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  name: string;
  size?: number;
  color?: string;
  onPress: any;
}

export const TouchableIcon: React.FC<Props> = ({
  name,
  size,
  color,
  onPress
}) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name={name} size={size} color={color ? color : undefined} />
  </TouchableOpacity>
);
