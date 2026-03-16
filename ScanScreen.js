
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Back button */}
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={{fontSize:20}}>←</Text>
      </TouchableOpacity>

      {/* Product Image */}
      <Image
        source={require("./assets/Scan Screen.jpg")}
        style={styles.image}
      />

      {/* Product Info */}
      

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#EED9C4"
  },

  back:{
    position:"absolute",
    top:60,
    left:20,
    backgroundColor:"#fff",
    padding:10,
    borderRadius:10
  },

  image:{
    width:300,
    height:650,
    resizeMode:"contain"
  },

  info:{
    marginTop:20,
    backgroundColor:"#fff",
    padding:15,
    borderRadius:15,
    width:200,
    alignItems:"center"
  },

  brand:{
    color:"gray"
  },

  name:{
    fontSize:18,
    fontWeight:"bold"
  }

});