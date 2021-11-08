import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import productReducer from "./store/reducers/productReducer";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  Products: productReducer,
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
