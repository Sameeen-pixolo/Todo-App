import React, { useState } from "react";
import Box from "@../../../components/Box";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const imgsrc = require("@/assets/images/react-logo.png");

export default function HomeScreen() {

  console.log(windowHeight);
  console.log(windowWidth);
  
  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <Text>Responsive</Text>
      </View>
      {/* <Box style={[styles.box,{ backgroundColor: "lightgreen" }]}>Responsive</Box> */}
      {/* <Box style={[styles.box,{ backgroundColor: "lightgreen" }]}>2</Box>
      <Box style={[styles.box,{ backgroundColor: "lightgreen" }]}>3</Box>
      <Box style={[styles.box,{ backgroundColor: "lightgreen" }]}>4</Box>
      <Box style={[styles.box,{ backgroundColor: "lightgreen" }]}>5</Box>
      <Box style={[styles.box,{ backgroundColor: "lightgreen" }]}>6</Box> */}
    </View>
  );
}

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor:"grey",
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  },

  box:{
    height: windowHeight === 672? "30%":"50%",
    width: windowWidth === 360? "30%":"40%",
    backgroundColor:"plum",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }
});
