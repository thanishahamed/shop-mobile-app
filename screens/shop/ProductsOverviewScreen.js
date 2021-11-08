import React from "react";
import {
  FlatList,
  Button,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cartActions";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
          <Ionicons name="ios-cart" size={32} color="red" />
        </TouchableOpacity>
      ),
    });
  }, [props.navigation]);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductItem
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: item.id,
              productTitle: item.title,
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductsOverviewScreen;
