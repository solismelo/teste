import React from "react";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(255,255,255, .2)",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 4
  }
});

const Box = ({ text }) => {
  return (
    <View style={styles.box}>
      <Text>{text}</Text>
    </View>
  );
};

export default Box;
