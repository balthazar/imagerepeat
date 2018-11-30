/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Image, View } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignitems: "center",
          justifyContent: "center",
          backgroundColor: "#3c3c3c"
        }}
      >
        <Image
          style={{
            width: 6000,
            height: 100,
            backgroundColor: "red",
            flexDirection: "row"
          }}
          resizeMode="repeat"
          source={require("./dan.jpeg")}
        />
      </View>
    );
  }
}
