import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ isCart }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HOME_STACK")}
        style={styles.appIconContainer}
      >
        {isCart ? (
          <Ionicons name={"chevron-back"} color={"#e96e6e"} />
        ) : (
          <Image
            source={require("../assets/apps.png")}
            style={styles.appIcon}
          />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCart}>My Cart</Text>}
      <Image source={require("../assets/dp.png")} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  appIcon: {
    height: 28,
    width: 28,
  },
  appIconContainer: {
    backgroundColor: "#fff",
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  myCart: {
    fontSize: 28,
    color: "black",
  },
});
