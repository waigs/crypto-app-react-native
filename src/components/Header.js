import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ headerText }) => (
  <View style={container}>
    <Text style={header}>{headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 55,
    alignItems: "center"
  },
  header: {
    fontWeight: "bold",
    fontSize: 20
  }
});

const { container, header } = styles;

export default Header;
