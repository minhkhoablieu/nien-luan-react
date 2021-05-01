import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const { height, width } = Dimensions.get("window");
const imgWidth = width / 2 - 30;

const PlantIcon = (props) => {
  const backgroundImg = props.image;

  const imgHeight =
    (Image.resolveAssetSource(backgroundImg).height /
      Image.resolveAssetSource(backgroundImg).width) *
    imgWidth;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.container, { height: imgHeight }, props.style]}>
        <Image source={backgroundImg} style={styles.imgStyle} />
        <Text style={styles.textStyle}>{props.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: imgWidth,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  imgStyle: {
    flex: 1,
    width: null,
    borderRadius: 15,
  },
  textStyle: {
    color: "#fff",
    position: "absolute",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
    bottom: 4,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default PlantIcon;
