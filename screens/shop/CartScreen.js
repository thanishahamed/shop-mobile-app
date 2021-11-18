import React from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function CartScreen() {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <View>
      <View>
        <Text>
          Cart Total: Rs. <Text> {cartTotalAmount} </Text>
        </Text>
        <Button title="Order Now!" />
      </View>
      <View>
        <Text>Cart Items</Text>
      </View>
    </View>
  );
}
