import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import productReducer from "./store/reducers/productReducer";
import cartReducer from "./store/reducers/cartReducer";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
