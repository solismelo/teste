import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import Box from "app/components/Box";

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(255,255,255, .2)",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 4
  },
  flatlist: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});

const Grid = ({ children, data, columns }) => {
  return (
    <FlatList
      data={data}
      style={styles.flatlist}
      keyExtractor={item => item.id}
      numColumns={columns}
      renderItem={({ item }) => <Box text="asdasd" />}
    />
  );
};

export default Grid;
