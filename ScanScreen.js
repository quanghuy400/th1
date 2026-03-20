import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function ScanScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/* BACKGROUND IMAGE */}
    
      {/* BACK BUTTON (là ảnh luôn) */}
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        
        <Image
          source={require("./assets/Rectangle 34.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* BOTTLE + SCAN */}
      <View style={styles.centerArea}>
        
        {/* Phóng to chai + lấy phần giữa */}
        <View style={styles.bottleWrapper}>
          <Image
            source={require("./assets/Bottle.jpg")}
            style={styles.bottle}
            resizeMode="cover"
          />
        </View>

        {/* SCAN FRAME */}
        <Image
          source={require("./assets/Group 5.png")}
          style={styles.scanFrame}
          resizeMode="contain"
        />
      </View>

      {/* CARD LAUREN'S (là 1 ảnh) */}
      <Image
        source={require("./assets/Group 4.png")}
        style={styles.card}
        resizeMode="contain"
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#EED9C4",
  },

  background: {
    position: "absolute",
    width: width,
    height: height,
  },

  back: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 10,
  },

  backIcon: {
    width: 36,
    height: 36,
  },

  centerArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  /* ↓↓↓ GIẢM KÍCH THƯỚC CHAI */
  bottleWrapper: {
    width: 260,
    height: 480,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  bottle: {
    width: 420,
    height: 750,
  },

  /* ↓↓↓ GIẢM KÍCH THƯỚC SCAN */
  scanFrame: {
    position: "absolute",
    width: 280,
    height: 500,
  },

  /* ↑↑↑ TĂNG SIZE CARD LAUREN */
  card: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    width: width * 0.92,   // tăng từ 0.85 lên 0.92
    height: 210,           // tăng chiều cao
  },

});