import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";

export default function PaymentScreen({ navigation }) {
  const [method, setMethod] = useState("card");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TOP WHITE CARD */}
        <View style={styles.topCard}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* Thay icon back của bạn */}
            <Image
              source={require("./assets/Rectangle 34.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <View style={styles.checkoutRow}>
            <Text style={styles.checkoutText}>Checkout 💳</Text>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.amount}>₹ 1,527</Text>
              <Text style={styles.gst}>Including GST (18%)</Text>
            </View>
          </View>
        </View>

        {/* PAYMENT METHOD */}
        <View style={styles.methodWrapper}>
          <TouchableOpacity
            style={[
              styles.methodBtn,
              method === "card" && styles.activeMethod,
            ]}
            onPress={() => setMethod("card")}
          >
            {/* Icon credit card của bạn */}
            <Image
              source={require("./assets/Active tab.png")}
              style={styles.methodIcon}
            />
            <Text
              style={[
                styles.methodText,
                method === "card" && styles.activeMethodText,
              ]}
            >
              Credit card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.methodBtn}
            onPress={() => setMethod("apple")}
          >
            <Image
              source={require("./assets/Apple icon.png")}
              style={styles.methodIcon}
            />
            <Text style={styles.methodText}>Apple Pay</Text>
          </TouchableOpacity>
        </View>

        {/* FORM */}
        <View style={styles.form}>
          <Text style={styles.label}>Card number</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="5261 4141 0151 8472"
              style={styles.input}
            />

            {/* Mastercard icon */}
            <Image
              source={require("./assets/Group 152.png")}
              style={styles.inputIcon}
            />

            {/* Scan icon */}
            <Image
              source={require("./assets/Group 153.png")}
              style={[styles.inputIcon, { marginLeft: 10 }]}
            />
          </View>

          <Text style={styles.label}>Cardholder name</Text>
          <TextInput
            placeholder="Christie Doe"
            style={styles.inputFull}
          />

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Expiry date</Text>
              <TextInput
                placeholder="06 / 2024"
                style={styles.inputFull}
              />
            </View>

            <View style={{ width: 15 }} />

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>CVV / CVC</Text>
              <View style={styles.cvvRow}>
                <TextInput
                  placeholder="915"
                  style={[styles.inputFull, { flex: 1 }]}
                />
                <View style={styles.helpBadge}>
                  <Text style={{ fontSize: 12 }}>?</Text>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.note}>
            We will send you an order details to your email after the successful payment
          </Text>

          <TouchableOpacity
            style={styles.payBtn}
            onPress={() => navigation.navigate("Success")}
          >
            <Image
              source={require("./assets/Group 154.png")}
              style={styles.lockIcon}
            />
            <Text style={styles.payText}>Pay for the order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },

  topCard: {
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  backIcon: {
    width: 20,
    height: 20,
    marginBottom: 20,
  },

  checkoutRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  checkoutText: {
    fontSize: 22,
    fontWeight: "700",
  },

  amount: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2ecc71",
  },

  gst: {
    fontSize: 12,
    color: "#999",
  },

  methodWrapper: {
    flexDirection: "row",
    backgroundColor: "#EDEFF5",
    margin: 20,
    borderRadius: 20,
    padding: 5,
  },

  methodBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 18,
  },

  activeMethod: {
    backgroundColor: "#2ecc71",
    shadowColor: "#2ecc71",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },

  methodText: {
    fontWeight: "600",
    marginLeft: 8,
  },

  activeMethodText: {
    color: "#fff",
  },

  methodIcon: {
    width: 18,
    height: 18,
  },

  form: {
    paddingHorizontal: 20,
  },

  label: {
    marginBottom: 6,
    fontWeight: "600",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEFF5",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    paddingVertical: 14,
  },

  inputIcon: {
    width: 24,
    height: 16,
  },

  inputFull: {
    backgroundColor: "#EDEFF5",
    borderRadius: 15,
    padding: 14,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
  },

  cvvRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  helpBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#C8F7E2",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },

  note: {
    textAlign: "center",
    fontSize: 12,
    color: "#999",
    marginVertical: 20,
  },

  payBtn: {
    flexDirection: "row",
    backgroundColor: "#2ecc71",
    padding: 18,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  lockIcon: {
    width: 18,
    height: 18,
    tintColor: "#fff",
    marginRight: 10,
  },

  payText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});