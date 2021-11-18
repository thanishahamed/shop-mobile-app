import React from "react";
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ProductsStackComponent() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Overview"
        component={ProductsOverviewScreen}
        options={{
          title: "Overview",
        }}
      />
      {/* <Stack.Screen name="SideDrawer" component={DrawerComponent} /> */}
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.productTitle })}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Shopping Cart" }}
      />
    </Stack.Navigator>
  );
}

function OrdersStackComponent() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrdersStack"
        component={OrdersScreen}
        options={{ title: "Your Orders" }}
      />
    </Stack.Navigator>
  );
}

export default function ShopNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Products"
          component={ProductsStackComponent}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Orders"
          component={OrdersStackComponent}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
