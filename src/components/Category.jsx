import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Category = ({ item, selectedcategory, setselectedcategory }) => {
  return (
    <TouchableOpacity onPress={() => setselectedcategory(item)}>
      <Text
        style={[
          styles.CategoryText,
          selectedcategory === item && {
            color: "#fff",
            backgroundColor: "#e96e6e",
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );        
};

export default Category;

const styles = StyleSheet.create({
  CategoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#938f8f",
    backgroundColor: "#dfdcdc",
    textAlign: "center",
    borderRadius: 16,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
