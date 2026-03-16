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

export default function CartScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={styles.title}>Your Cart 👍🏻</Text>

        {/* Item */}
        {[
          { name: "Orange Juice", price: 149 },
          { name: "Skimmed Milk", price: 129 },
          { name: "Aloe Vera Lotion", price: 1249 },
        ].map((item, index) => (
          <View key={index} style={styles.item}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.price}>₹ {item.price}</Text>
            </View>

            <View style={styles.qtyBox}>
              <Text style={styles.qtyBtn}>-</Text>
              <Text style={styles.qty}>2</Text>
              <Text style={styles.qtyBtn}>+</Text>
            </View>
          </View>
        ))}

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
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },

  title: { fontSize: 24, fontWeight: "700", marginBottom: 20 },

  item: {
    backgroundColor: "#F3F3F3",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  itemName: { fontWeight: "600" },
  price: { color: "#ff6b35", marginTop: 4 },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  qtyBtn: { fontSize: 18, paddingHorizontal: 10 },
  qty: { fontWeight: "600" },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  totalText: { fontSize: 16, fontWeight: "600" },
  totalPrice: { fontSize: 18, fontWeight: "700", color: "#ff6b35" },

  checkoutBtn: {
    marginTop: 25,
    backgroundColor: "#E98A57",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  checkoutText: { color: "#fff", fontWeight: "600" },
});