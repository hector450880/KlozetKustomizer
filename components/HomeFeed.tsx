// HomeFeed.tsx
import React, { useState } from "react";
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const postsData = [
  {
    id: 1,
    user: "CasualUser",
    userAvatar: "https://i.pravatar.cc/150?img=1",
    image: "https://images.unsplash.com/photo-1593032465170-87b8b991c9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    likes: 34,
    comments: 5,
    description: "Casual Outfit",
  },
  {
    id: 2,
    user: "DenimFan",
    userAvatar: "https://i.pravatar.cc/150?img=2",
    image: "https://images.unsplash.com/photo-1582912220080-380af15208c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    likes: 21,
    comments: 3,
    description: "Denim Vibes",
  },
  {
    id: 3,
    user: "SummerVibes",
    userAvatar: "https://i.pravatar.cc/150?img=3",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    likes: 45,
    comments: 8,
    description: "Summer Vibes",
  },
  {
    id: 4,
    user: "StreetKing",
    userAvatar: "https://i.pravatar.cc/150?img=4",
    image: "https://images.unsplash.com/photo-1532446658420-fbc0ba54b826?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    likes: 12,
    comments: 0,
    description: "Street Style",
  },
  {
    id: 5,
    user: "FormalFit",
    userAvatar: "https://i.pravatar.cc/150?img=5",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    likes: 27,
    comments: 2,
    description: "Formal Look",
  },
  {
    id: 6,
    user: "NightOwl",
    userAvatar: "https://i.pravatar.cc/150?img=6",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    likes: 31,
    comments: 6,
    description: "Night Outfit",
  },
];

export default function HomeFeed() {
  const [posts] = useState(postsData);
  const screenWidth = Dimensions.get("window").width;
  const spacing = 16;
  const postWidth = screenWidth - spacing * 2;

  const handleMenuPress = () => {
    Alert.alert(
      "Options",
      "",
      [
        { text: "Share", onPress: () => Alert.alert("Sharing... (mock)") },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView contentContainerStyle={{ padding: spacing }}>
      {/* Title at the top */}
      <Text style={styles.title}>KlosetKustomizer</Text>

      {posts.map((post) => (
        <View key={post.id} style={[styles.postContainer, { width: postWidth }]}>
          {/* User info */}
          <View style={styles.userContainer}>
            <Image source={{ uri: post.userAvatar }} style={styles.userAvatar} />
            <Text style={styles.username}>{post.user}</Text>
            <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
              <Text style={styles.menuText}>⋮</Text>
            </TouchableOpacity>
          </View>

          <Image source={{ uri: post.image }} style={styles.postImage} />

          <View style={styles.postContent}>
            <Text style={styles.description}>{post.description}</Text>
            <Text style={styles.stats}>❤️ {post.likes}  💬 {post.comments}</Text>
          </View>
        </View>
      ))}

      {/* Footer message */}
      <Text style={styles.footerText}>Could Not Load More Posts</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
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
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  menuButton: {
    padding: 4,
  },
  menuText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  postContent: {
    padding: 10,
  },
  description: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  stats: {
    fontSize: 14,
    color: "#555",
  },
  footerText: {
    textAlign: "center",
    color: "#888",
    fontSize: 14,
    marginTop: 20,
    marginBottom: 40,
  },
});
