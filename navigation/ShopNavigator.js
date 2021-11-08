import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function ShopNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Overview"
          component={ProductsOverviewScreen}
          options={{ title: "Products" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
