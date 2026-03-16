import React from "react";
import { View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import ScanScreen from "./ScanScreen";
import CartScreen from "./CartScreen";
import PaymentScreen from "./PaymentScreen";
import SuccessScreen from "./SuccessScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function DummyScreen() {
  return <View style={{ flex: 1, backgroundColor: "#fff" }} />;
}

/* ================= TAB ================= */
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 20,
          height: 70,
          backgroundColor: "#fff",
          borderRadius: 25,
          elevation: 10,
        },
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "Home")
            icon = require("./assets/Group 152.png");
          if (route.name === "Bell")
            icon = require("./assets/Group 153.png");
          if (route.name === "Scan")
            icon = require("./assets/Vector.png");
          if (route.name === "History")
            icon = require("./assets/Group 154.png");
          if (route.name === "Cart")
            icon = require("./assets/Group 161.png");

          if (!icon) return null;

          if (route.name === "Scan") {
            return (
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: "#4CAF50",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 30,
                }}
              >
                <Image
                  source={icon}
                  style={{ width: 30, height: 30, tintColor: "#fff" }}
                />
              </View>
            );
          }

          return (
            <Image
              source={icon}
              style={{
                width: 24,
                height: 24,
                opacity: focused ? 1 : 0.5,
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bell" component={DummyScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="History" component={DummyScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

/* ================= STACK ================= */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={MainTabs} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}