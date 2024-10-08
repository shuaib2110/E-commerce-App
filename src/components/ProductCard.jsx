import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const productCard = ({ item, handleliked}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("PRODUCT-DETAILS", {item})
    }} style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.coverImg} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleliked(item);
        }}
        style={styles.likeContainer}
      >
        {!item?.isliked ? (
          <FontAwesome name={"heart-o"} size={20} color={"#e55b5b"} />
        ) : (
          <FontAwesome name={"heart"} size={20} color={"#e55b5b"} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default productCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    // position: "relative",
  },
  coverImg: {
    height: 256,
    width: "90%",
    borderRadius: 20,
    marginVertical: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    color: "#444",
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    color: "#9c9c9c",
    fontWeight: "600",
  },
  content: {
    paddingLeft: 15,
  },
  likeContainer: {
    height: 34,
    width: 34,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    position: "absolute",
    top: 18,
    right: 25,
  },
});
