import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CartContext } from "../context/CartContext";

const imageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png";

const sizes = ["S", "M", "L", "XL"];
const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];
const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);
  const route = useRoute();
  const item = route.params.item;

  const [selectedsize, setselectedsize] = useState(null);
  const [selectedcolor, setselectedcolor] = useState(null);
  const handleAddToCart = (item)=>{
    item.size = selectedsize;
    item.color = selectedcolor;
    addToCart(item);
    navigation.navigate("CART")
  }
  return (
    <ScrollView>
      <LinearGradient colors={["#fdf0f3", "#fffbfc"]} style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.coverImg} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, styles.price]}>₹{item.price}</Text>
        </View>
        {/* size container */}
        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) => {
            return (
              <TouchableOpacity
                style={styles.sizeValueContainer}
                onPress={() => {
                  setselectedsize(size);
                }}
              >
                <Text
                  style={[
                    styles.sizeValue,
                    selectedsize === size && { color: "#e55b5b" },
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={[styles.title, styles.colorText]}>Colors</Text>
        <View style={styles.colorContainer}>
          {colorsArray.map((color) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setselectedcolor(color);
                }}
                style={[
                  styles.circleBorder,
                  selectedcolor === color && {
                    borderColor: color,
                    borderWidth: 2,
                  },
                ]}
              >
                <View
                  style={[
                    styles.circle,
                    {
                      backgroundColor: color,
                    },
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{
          handleAddToCart(item)
        }}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
  },
  coverImg: {
    width: "100%",
    height: 420,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    colors: "#444444",
    fontWeight: "500",
  },
  price: {
    color: "#4d4c4c",
  },
  sizeContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  sizeText: {
    marginHorizontal: 20,
  },
  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  colorText: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  colorContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  circleBorder: {
    height: 48,
    width: 48,
    borderRadius: 24,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#e96e6e",
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
