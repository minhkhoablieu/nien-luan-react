import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Platform,
} from "react-native";

const { width, height } = Dimensions.get("window");

const SearchBar = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        style={styles.textInput}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder="Tìm kiếm cây"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    height: height / 18,
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: Platform.OS === "ios" ? 15 : 8,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.09,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textInput: {
    color: "#000",
  },
});

export default SearchBar;
