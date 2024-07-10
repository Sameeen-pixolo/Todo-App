import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";

const imgsrc = require("@/assets/images/react-logo.png");

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"grey"} barStyle={"dark-content"} />
      <Pressable  style={styles.customButton} onPress={() => setIsModalVisible(true)}>
        <View>
          <Text>Press me!!</Text>
        </View>
      </Pressable>

      <Button
        title="Get alert"
        onPress={() => Alert.alert("Session timeout !!", "Login again")}
      />

      <View style={styles.box}></View>

      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Image source={imgsrc} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems:"center",
    gap: 10,
  },

  customButton: {
    height: 50,
    width: "100%",
    backgroundColor: "pink",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    height: 100,
    width: 100,
    backgroundColor: "lightblue",
    shadowColor:"black",
    elevation:10
  },

  modalContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
});
