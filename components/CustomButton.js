import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constant/theme";
export default function CustomButton({
  antNameIcon,
  iconSize,
  iconColor,
  style,
  onPress,
}) {
  return (
    <AntDesign
      style={[CustomeButtonStyles.icon, { ...style }]}
      name={antNameIcon}
      size={iconSize || 24}
      color={iconColor || COLORS.lightWhite}
      onPress={onPress}
    />
  );
}

CustomeButtonStyles = StyleSheet.create({
  icon: {
    backgroundColor: COLORS.youDoNote,
    paddingHorizontal: 135,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 8,
  },
});
