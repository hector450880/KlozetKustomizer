import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

// Example recommended posts
const recommendedPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1593032465170-87b8b991c9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Casual Outfit",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582912220080-380af15208c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Denim Vibes",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Summer Vibes",
  },
];

// Example trending posts
const trendingPosts = [
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1532446658420-fbc0ba54b826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Street Style",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Formal Look",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Night Outfit",
  },
];

// Example seasonal outfits
const seasonalPosts = [
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1618354693543-3edb204d1e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Spring Blossoms",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1600180758897-5d2d7cfcb0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Cozy Winter",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1503342452485-86b7a9f33017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Autumn Vibes",
  },
];

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const screenWidth = Dimensions.get("window").width;
  const postWidth = screenWidth - 32; // leave margin on sides

  const renderPosts = (posts: typeof recommendedPosts) =>
    posts.map((post) => (
      <View key={post.id} style={[styles.postContainer, { width: postWidth }]}>
        <Image source={{ uri: post.image }} style={styles.postImage} />
        <Text style={styles.description}>{post.description}</Text>
      </View>
    ));

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 16 }}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search outfits..."
        value={query}
        onChangeText={setQuery}
      />

      <Text style={styles.sectionTitle}>Recommended Fits</Text>
      <View style={styles.sectionContainer}>{renderPosts(recommendedPosts)}</View>

      <Text style={styles.sectionTitle}>Trending Outfits</Text>
      <View style={styles.sectionContainer}>{renderPosts(trendingPosts)}</View>

      <Text style={styles.sectionTitle}>Seasonal Outfits</Text>
      <View style={styles.sectionContainer}>{renderPosts(seasonalPosts)}</View>

      {/* Footer message */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Could not load more posts</Text>
        <Text style={styles.footerText}>Maybe switch off the UTD Wifi</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 16,
  },
  searchBar: {
    height: 40,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  sectionContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  postContainer: {
    marginBottom: 16,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  postImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  description: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    marginVertical: 24,
  },
  footerText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginVertical: 2,
  },
});
