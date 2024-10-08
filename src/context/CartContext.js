import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState, reduce } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
export const CartContext = createContext();

const loadCartItem = async () => {
  let Carts = await AsyncStorage.getItem("Carts");
  Carts = Carts ? JSON.parse(Carts) : [];
  console.log("carts", Carts);
  // setcarts(Carts);
  // totalsum(Carts);
};
export const Cartprovider = ({ children }) => {
  const [Carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    loadCartItem();
  }, []);
  const addToCart = async (item) => {
    const itemExist = Carts.findIndex((cart) => cart.id === item.id);
    if (itemExist === -1) {
      const newCartItems = [...Carts, item];
      await AsyncStorage.setItem("Carts", JSON.stringify(newCartItems));

      setCarts(newCartItems);
    }
  };

  const deleteCartItem = async (id) => {
    let cartItems = await AsyncStorage.getItem("cart");
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    cartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(cartItems);
    calculateTotalPrice(cartItems);
    await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const totalsum = (Carts) => {
    const totalsum = Carts.reduce((amount, item) => amount + item.price, 0);
    console.log("totalsum:", totalsum);
    setTotalPrice(totalsum);
  };
  const value = {
    Carts,
    addToCart,
    totalsum,
    deleteCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>; // Corrected 'Children' to 'children'
};
