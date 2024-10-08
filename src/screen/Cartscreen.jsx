import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CartCard from "../components/CartCard";
import { CartContext } from "../context/CartContext";

const Cartscreen = () => {
  const { Carts,totalPrice  , deleteCartItem } = useContext(CartContext);
  return (
    <LinearGradient colors={["#fdf0f3", "#fffbfc"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>

      <FlatList
        data={Carts}
        ListHeaderComponent={<></>}
        renderItem={({item})=><CartCard item={item} deleteFromCart={deleteCartItem}/>}
        ListFooterComponent={
          <>
            <View style={styles.PTcontaainer}>
              <View style={styles.priceAndtitle}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>₹X,XXX</Text>
              </View>
              <View style={styles.priceAndtitle}>
                <Text style={styles.text}>Shipping:</Text>
                <Text style={styles.text}>₹0.00</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.priceAndtitle}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text
                style={[styles.text, { color: "black", fontWeight: "700" }]}
              >
                ₹X,XXX
              </Text>
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      />

      <TouchableOpacity style={styles.checkoutcontainer}>
        <Text style={styles.checkouttext}>Checkout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Cartscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerContainer: {
    marginBottom: 20,
  },
  PTcontaainer: {
    marginTop: 40,
  },
  priceAndtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: "#757575",
    fontSize: 18,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#c0c0c0",
    marginVertical: 10,
  },
  checkoutcontainer: {
    backgroundColor: "#e96e6e",
    marginVertical: 10,
    borderRadius: 10,
  },
  checkouttext: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    padding: 10,
  },
});
