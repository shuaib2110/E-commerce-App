import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";

const imageURL =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png";
const CartCard = ({ item, deleteCartItem }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.coverimage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title} </Text>
        <Text style={styles.price}>₹{item.price}</Text>
        <View style={styles.circleSizeContainer}>
          <View style={[styles.circle, { backgroundColor: item.color}]} />
          <View style={styles.sizeCircle}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{
        // deleteCartItem(item);
      }}>
        <Octicons name={"trash"} color={"#f68cb5"} size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
  },
  coverimage: {
    height: 125,
    width: "25%",
    borderRadius: 20,
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: "#444",
    fontWeight: "500",
  },
  price: {
    color: "#797979",
    marginVertical: 10,
    fontSize: 18,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
   
  },
  circleSizeContainer: {
    flexDirection: "row",
  },
  sizeCircle: {
    backgroundColor: "white",
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
