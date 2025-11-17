import React from "react";
import { StyleSheet, View } from "react-native";
import HomeFeed from "../components/HomeFeed";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeFeed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
