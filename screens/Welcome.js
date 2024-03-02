import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import images from "../constant/images";
import CustomButton from "../components/CustomButton";
import { COLORS } from "../constant/theme";

const Welcome = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView>
      <View>
        <Image source={images.logo} style={{ width }} />
      </View>
      <View
        style={{
          // backgroundColor: "red",
          // justifyContent: "center",
          alignItems: "center",
          height,
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginBottom: 25,
              fontSize: 25,
              paddingRight: 5,
              fontWeight: "bold",
            }}
          >
            You Do
          </Text>
          <Text
            style={{ fontSize: 25, color: COLORS.yellow, fontWeight: "bold" }}
          >
            Note🖋️
          </Text>
        </View>

        <Text
          style={{
            // backgroundColor: "violet",
            fontSize: 15,
            marginBottom: 5,
          }}
        >
          If You Aren't Taking Notes, You Aren't Learning.
        </Text>
        <Text style={{ marginBottom: 25, fontWeight: "bold" }}>
          - Ben Casnocha
        </Text>

        <CustomButton
          antNameIcon="arrowright"
          onPress={() => {
            navigation.navigate("Home");
          }}
          iconColor={COLORS.yellow}
        />
      </View>
    </SafeAreaView>
  );
};

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
