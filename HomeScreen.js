import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={require("./assets/Mask Group.png")}
          style={styles.avatar}
        />
      </View>

      {/* TITLE */}
      <Text style={styles.insight}>Your Insights</Text>

      {/* GRID */}
      <View style={styles.grid}>
        
        {/* Scan New */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Scan")}
        >
          <Image
            source={require("./assets/Group 157.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>Scan New</Text>
          <Text style={styles.sub}>Scanned 483</Text>
        </TouchableOpacity>

        {/* Counterfeits */}
        <View style={styles.card}>
          <Image
            source={require("./assets/Frame.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>Counterfeits</Text>
          <Text style={styles.sub}>Counterfeited 32</Text>
        </View>

        {/* Success */}
        <View style={styles.card}>
          <Image
            source={require("./assets/Group 158.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>Success</Text>
          <Text style={styles.sub}>Checkouts 8</Text>
        </View>

        {/* Directory */}
        <View style={styles.card}>
          <Image
            source={require("./assets/Group 151.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>Directory</Text>
          <Text style={styles.sub}>History 26</Text>
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  hello: {
    fontSize: 24,
    fontWeight: "700",
  },

  name: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  insight: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  card: {
    width: "47%",
    backgroundColor: "#F5F5F5",
    paddingVertical: 25,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 18,

    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },

  icon: {
    width: 40,
    height: 40,
    marginBottom: 12,
    resizeMode: "contain",
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
  },

  sub: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },

});