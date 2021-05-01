import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import PlantDetail from "../screens/Plant/Detail";
import PlantHome from "../screens/Plant/Home";

import { Image } from "react-native";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#eff4f0",
          elevation: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/8.png")}
              style={{ height: 20, width: 20 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="PlantHome"
        component={PlantHome}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/10.png")}
              style={{ height: 20, width: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
  gestureEnabled: true,
  cardOverlayEnabled: true,
  tabBarVisible: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="PlantDetail" component={PlantDetail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
