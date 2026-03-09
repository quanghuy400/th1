import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        {/* Avatar (bạn thay ảnh nếu muốn) */}
        <Image
          source={require("./assets/Mask Group.png")}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.insight}>Your Insights</Text>

      <View style={styles.grid}>

        {/* Scan New */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Scan")}
        >
          {/* ICON */}
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

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#fff"
  },

  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  hello:{
    fontSize:24,
    fontWeight:"bold"
  },

  name:{
    color:"gray"
  },

  avatar:{
    width:50,
    height:50,
    borderRadius:25
  },

  insight:{
    marginTop:25,
    fontSize:18,
    fontWeight:"500"
  },

  grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    marginTop:20
  },

  card:{
    width:"47%",
    backgroundColor:"#F3F3F3",
    padding:20,
    borderRadius:15,
    alignItems:"center",
    marginBottom:15
  },

  icon:{
    width:40,
    height:40,
    marginBottom:10
  },

  title:{
    fontWeight:"bold"
  },

  sub:{
    fontSize:12,
    color:"gray"
  }

});