import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";

const { width, height } = Dimensions.get("window");

const imgWidth = width;

export default function Detail({ navigation, route }) {
  // const { plant } = props;
  const plantData = route.params.plant;
  // const action = route.params.action;

  const imgHeight =
    (Image.resolveAssetSource(plantData.image).height /
      Image.resolveAssetSource(plantData.image).width) *
    imgWidth;
  return (
    <View>
      <Header></Header>

      <View>
        <Text style={styles.scienceName}>{plantData.scienceName}</Text>
        <View style={[styles.container, { height: imgHeight, marginTop: 10 }]}>
          <Image source={plantData.image} style={styles.imgStyle} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.infomation}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {plantData.name}
              </Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 16, color: "#4B5563" }}>MIÊU TẢ</Text>
              <Text style={{ marginTop: 10, fontSize: 15 }}>
                {plantData.description}
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 16, color: "#4B5563" }}>
                THÀNH PHẦN HOÁ HỌC GÂY ĐỘC
              </Text>
              <Text style={{ marginTop: 10, fontSize: 15 }}>
                {plantData.toxic}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    width: imgWidth,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  infomation: {
    padding: 20,
    backgroundColor: "#D1D5DB",
    marginTop: 20,
    borderRadius: 10,
  },
  imgStyle: {
    flex: 1,
    width: null,
    borderRadius: 10,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  scienceName: {
    color: "#fff",
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
});
