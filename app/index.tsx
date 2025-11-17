import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeFeed from "../components/HomeFeed";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      {/* Title */}
      <View style={styles.header}>
        <Text style={styles.title}>KlosetKustomizer</Text>
      </View>

      {/* Feed */}
      <HomeFeed />

      {/* Bottom text */}
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Could Not Load More Projects</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: "center", padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold" },
  bottom: { alignItems: "center", padding: 16 },
  bottomText: { fontSize: 14, color: "#555" },
});
