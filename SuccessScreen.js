import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

export default function SuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      {/* Back */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("./assets/Rectangle 34.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={require("./assets/Group 167.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Text */}
      <Text style={styles.title}>Payment Success, Yayy!</Text>

      <Text style={styles.subtitle}>
        we will send order details and invoice in your contact no. and
        registered email
      </Text>

      <TouchableOpacity>
        <Text style={styles.checkDetails}>
          Check Details →
        </Text>
      </TouchableOpacity>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Download Invoice")}
      >
        <Text style={styles.buttonText}>Download Invoice</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    alignItems: "center",
  },

  backBtn: {
    position: "absolute",
    left: 20,
    top: 20,
  },

  backIcon: {
    width: 22,
    height: 22,
  },

  imageWrapper: {
    marginTop: 100,
    marginBottom: 40,
  },

  image: {
    width: 250,
    height: 250,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "#888",
    paddingHorizontal: 40,
    fontSize: 14,
    lineHeight: 20,
  },

  checkDetails: {
    color: "#5F6CE0",
    fontWeight: "600",
    marginTop: 20,
  },

  button: {
    position: "absolute",
    bottom: 40,
    width: "85%",
    backgroundColor: "#5F6CE0",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});