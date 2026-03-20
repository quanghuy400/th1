import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#E98A57" />
        </TouchableOpacity>

        <Text style={styles.title}>Your Cart 👍🏻</Text>

        {/* ================= ITEM 1 ================= */}
        <View style={styles.item}>
          <View style={styles.imageBox}>
            <Image
              source={require("./assets/Bottle.jpg")} // 👈 đổi tên ảnh 1 ở đây
              style={styles.image}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.itemName}>Orange Juice</Text>
            <Text style={styles.price}>₹ 149</Text>
          </View>

          <View style={styles.qtyBox}>
            <Text style={styles.qtyBtn}>-</Text>
            <Text style={styles.qty}>2</Text>
            <Text style={styles.qtyBtn}>+</Text>
          </View>
        </View>

        {/* ================= ITEM 2 ================= */}
        <View style={styles.item}>
          <View style={styles.imageBox}>
            <Image
              source={require("./assets/Rectangle 31.png")} // 👈 đổi tên ảnh 2 ở đây
              style={styles.image}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.itemName}>Skimmed Milk</Text>
            <Text style={styles.price}>₹ 129</Text>
          </View>

          <View style={styles.qtyBox}>
            <Text style={styles.qtyBtn}>-</Text>
            <Text style={styles.qty}>2</Text>
            <Text style={styles.qtyBtn}>+</Text>
          </View>
        </View>

        {/* ================= ITEM 3 ================= */}
        <View style={styles.item}>
          <View style={styles.imageBox}>
            <Image
              source={require("./assets/Rectangle 45.png")} // 👈 đổi tên ảnh 3 ở đây
              style={styles.image}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.itemName}>Aloe Vera Lotion</Text>
            <Text style={styles.price}>₹ 1,249</Text>
          </View>

          <View style={styles.qtyBox}>
            <Text style={styles.qtyBtn}>-</Text>
            <Text style={styles.qty}>2</Text>
            <Text style={styles.qtyBtn}>+</Text>
          </View>
        </View>

        {/* Total */}
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>₹ 1,527</Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={styles.checkoutText}>Proceed to checkout</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  backBtn: {
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  item: {
    backgroundColor: "#F3F3F3",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  imageBox: {
    width: 60,
    height: 60,
    backgroundColor: "#ddd",
    borderRadius: 12,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  itemName: {
    fontWeight: "600",
  },

  price: {
    color: "#ff6b35",
    marginTop: 4,
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  qtyBtn: {
    fontSize: 18,
    paddingHorizontal: 10,
  },

  qty: {
    fontWeight: "600",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  totalText: {
    fontSize: 16,
    fontWeight: "600",
  },

  totalPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ff6b35",
  },

  checkoutBtn: {
    marginTop: 25,
    backgroundColor: "#E98A57",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "600",
  },
});