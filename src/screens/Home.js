import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MainPage from "../components/MainPage";
import PlantIcon from "../components/PlantIcon";

import { plantData } from "../services/database";

const { width, height } = Dimensions.get("window");

export default function Home(props) {
  const { navigate } = props.navigation;

  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(plantData);
    setMasterDataSource(plantData);
  }, []);
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.header__title}>Trang chủ</Text>
        <Text style={styles.header__sub}></Text>
      </Header>
      <SearchBar
        style={styles.search__form}
        value={search}
        onChangeText={(text) => searchFilterFunction(text)}
      />
      <MainPage>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", marginTop: 50 }}>
            <View style={{ marginRight: 20, width: width / 2 - 25 }}>
              {filteredDataSource
                .filter((_, i) => i % 2 === 0)
                .map((plant, index) => (
                  <PlantIcon
                    key={index}
                    name={plant.name}
                    image={plant.backgroundImage}
                    onPress={() => {
                      navigate("PlantDetail", { plant, action: "add" });
                    }}
                  />
                ))}
            </View>
            <View style={{ width: width / 2 - 25 }}>
              {filteredDataSource
                .filter((_, i) => i % 2 !== 0)
                .map((plant, index) => (
                  <PlantIcon
                    key={index}
                    name={plant.name}
                    image={plant.backgroundImage}
                    onPress={() => {
                      navigate("PlantDetail", { plant, action: "add" });
                    }}
                  />
                ))}
            </View>
          </View>
        </ScrollView>
      </MainPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f7",
  },
  header__title: {
    color: "#fff",
    fontSize: height * 0.03,
    marginTop: Platform.OS === "ios" ? height * 0.011 : -height * 0.011,
  },
  header__sub: {
    marginTop: height * 0.011,
    color: "#fff",
    width: (width / 3) * 1.8,
    fontSize: height * 0.017,
  },
  search__form: {
    top: height / 5 - (height / 18) * 0.7,
    zIndex: 2,
  },
});
