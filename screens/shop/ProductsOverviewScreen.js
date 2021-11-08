import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";

export default function ProductsOverviewScreen() {
  const products = useSelector((state) => state.Products.availableProducts);

  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>;
  };
  return (
    <SafeAreaView>
      <FlatList data={products} renderItem={renderItem} />
    </SafeAreaView>
  );
}
