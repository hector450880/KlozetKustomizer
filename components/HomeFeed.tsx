// components/HomeFeed.tsx
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import postsData, { FeedPost } from "./postsData";

export default function HomeFeed() {
  const screenWidth = Dimensions.get("window").width;
  const spacing = 12;
  const postWidth = screenWidth - spacing * 2;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: spacing }}>
        {postsData.map((post: FeedPost) => (
          <View key={post.id} style={[styles.postContainer, { width: postWidth }]}>
            <Text style={styles.category}>{post.category}</Text>
            <View style={styles.userContainer}>
              <Image source={{ uri: post.userAvatar }} style={styles.userAvatar} />
              <Text style={styles.username}>{post.user}</Text>
            </View>
            <Image source={{ uri: post.image }} style={styles.postImage} />
            <View style={styles.postContent}>
              <Text style={styles.description}>{post.description}</Text>
              <Text style={styles.tags}>{post.tags.join(" ")}</Text>
              <Text style={styles.stats}>❤️ {post.likes}  💬 {post.comments}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* AI Chat Box Placeholder */}
      <TouchableOpacity style={styles.aiChatBox}>
        <Text style={styles.aiText}>💬 AI Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  category: { fontSize: 14, fontWeight: "bold", color: "#888", margin: 8 },
  userContainer: { flexDirection: "row", alignItems: "center", paddingHorizontal: 10 },
  userAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontWeight: "bold", fontSize: 16, flex: 1 },
  postImage: { width: "100%", height: 250, resizeMode: "cover" },
  postContent: { padding: 10 },
  description: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  tags: { fontSize: 12, color: "#555", marginTop: 4 },
  stats: { fontSize: 14, color: "#555", marginTop: 6 },

  // AI Chat Box
  aiChatBox: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  aiText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
