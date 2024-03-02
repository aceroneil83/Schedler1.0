import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../constant/theme";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = ({ value, onChangeText, onClear }) => {
  return (
    <View>
      <TextInput
        placeholder="Search your note..."
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
      />
      {value ? (
        <AntDesign
          name="close"
          size={20}
          color={COLORS.primary}
          onPress={onClear}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
    borderColor: COLORS.youDoNote,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  clearIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});
export default SearchBar;
