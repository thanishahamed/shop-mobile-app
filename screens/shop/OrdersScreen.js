import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function OrdersScreen(props) {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
          <Ionicons name="ios-cart" size={32} color="red" />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Ionicons name="ios-list" size={32} color="red" />
        </TouchableOpacity>
      ),
    });
  }, [props.navigation]);

  return (
    <View>
      <Text> Listing your orders here </Text>
    </View>
  );
}
