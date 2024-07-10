import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Box = ({ children, style }) => {
  return (
    <View style={[style, boxStyles.box]}>
      <Text>{children}</Text>
    </View>
  );
};
export default Box;

const boxStyles = StyleSheet.create({
  box: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
});
