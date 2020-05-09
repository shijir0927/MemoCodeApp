import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/HomeScreen";
import NumberMemo from "./components/NumberMemo";
import NumberRecall from "./components/NumberRecall";

export default class App extends Component {
  render() {
    return (
      <View>
        <HomeScreen />
      </View>
    );
  }
}
