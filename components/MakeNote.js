import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../constant/theme";

const MakeNote = ({ item, onPress }) => {
  const { noteTitle, note } = item;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={makeNotesStyles.note}>
        <Text
          numberOfLines={1}
          style={{
            fontWeight: "bold",
            color: COLORS.yellow,
            fontSize: 16,
            paddingBottom: 5,
          }}
        >
          {noteTitle}
        </Text>
        <Text numberOfLines={3} style={{ color: COLORS.lightWhite }}>
          {note}
        </Text>
        <Text
          style={{
            position: "absolute",
            right: 0,
            backgroundColor: COLORS.youDoNote,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 15,
            color: COLORS.youDoNote,
          }}
        >
          a
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MakeNote;

const makeNotesStyles = StyleSheet.create({
  note: {
    backgroundColor: COLORS.violet,
    paddingHorizontal: 25,
    paddingVertical: 30,
    marginTop: 10,
    // flex: 1,
    borderRadius: 15,
    // marginRight: 10,
  },
});
