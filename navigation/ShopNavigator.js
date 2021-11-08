import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";

const Stack = createNativeStackNavigator();

export default function ShopNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Overview"
          component={ProductsOverviewScreen}
          options={{
            title: "Overview",
          }}
        />
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
    </NavigationContainer>
  );
}
