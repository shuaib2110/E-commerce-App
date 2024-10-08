// import { enableScreens } from "react-native-screens";

// enableScreens();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, length } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "./src/screen/ProductDetailScreen";
import Cartscreen from "./src/screen/Cartscreen";
import { CartContext, Cartprovider } from "./src/context/CartContext";
import { useContext } from "react";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function Category() {
  return (
    <View>
      <Text style={{fontSize:30, textAlign:"center"}} >CAREGORY</Text>
    </View>
  );
}

function Profile() {
  return (
    <View>
      <Text style={{fontSize:30, textAlign:"center"}}>ACCOUNT</Text>
    </View>
  );
}

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT-DETAILS" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <Cartprovider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#ff4d6d",
          }}
          initialRouteName=""
        >
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <Entypo name={"home"} size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={Category}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name={"reorder"} size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="CART"
            component={Cartscreen}
            options={{
              tabBarIcon: ({ size, color }) => {
                const { Carts } = useContext(CartContext);
              
                return (
                  <View style={{
                    position:"relative",
                  }}>
                  <MaterialCommunityIcons
                    name={"cart-variant"}
                    size={size}
                    color={color}
                    />
                    <View style={{
                      height:14,
                      width:14,
                      borderRadius:7,
                      backgroundColor:color,
                      justifyContent:"center",
                      alignItems:"center",
                      position:"absolute",
                      top:-10,
                      right:-5,
                    }}>
                      <Text style={{
                        fontSize:10,
                        color:"#fff",
                        fontWeight:500,
                      }}>{Carts?.length}</Text>
                    </View>
                    </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={Profile}
            options={{
              tabBarIcon: ({ size, color }) => (
                <FontAwesome name={"user"} size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Cartprovider>
  );
};

export default App;
