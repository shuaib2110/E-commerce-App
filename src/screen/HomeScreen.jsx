import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Category from "../components/Category";
import { CaretDownFilled } from "@ant-design/icons";
import ProductCard from "../components/ProductCard";
import productCard from "../components/ProductCard";
import data from "../data/data.json";

const categeries = ["Trending Now", "All", "New", "Mens", "Womens"];
const HomeScreen = () => {
  const [products, setproducts] = useState(data.products);
  const [selectedcategory, setselectedcategory] = useState("Trending Now");

  const handleliked = (item) => {
    const newProducts = products.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isliked: true,
        };
      }
      return prod;
    });
    setproducts(newProducts);
  };
  return (
    <LinearGradient colors={["#fdf0f3", "#fffbfc"]} style={styles.container}>
      <Header />

      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
            <Text style={styles.matchText}>Match Your Style</Text>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome name={"search"} size={26} color={"#c0c0c0"} />
              </View>
              <TextInput style={styles.TextInput} placeholder="Search" />
            </View>
            <FlatList
              data={categeries}
              renderItem={({ item }) => (
                <Category
                  item={item}
                  selectedcategory={selectedcategory}
                  setselectedcategory={setselectedcategory}
                />
              )}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        data={products}
        renderItem={({ item, index }) => (
          <ProductCard item={item} handleliked={handleliked} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}

        contentContainerStyle={{
          paddingBottom: 150,
        }}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },
  matchText: {
    fontSize: 28,
    color: "black",
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: "#fff",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  TextInput: {
    // flex: 1,
    color: "#c0c0c0",
  },
  iconContainer: {
    marginHorizontal: 15,
  },
});
