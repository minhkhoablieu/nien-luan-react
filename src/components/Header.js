import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default function Header({ children, style }) {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#00a46c" />
      <View style={[styles.headerContainer, style]}>{children}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    backgroundColor: "#00a46c",
    height: height / 5,
    width: "100%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 25,
    top: 0,
  },
});
