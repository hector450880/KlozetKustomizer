// app/profile.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// Import your posts arrays
import { postsData } from "../components/HomeFeed";
import { closetItems } from "../components/YourCloset";

// Types
interface BasePost {
  id: number;
  image: string;
  description: string;
}

interface FeedPost extends BasePost {
  user: string;
  userAvatar: string;
  likes: number;
  comments: number;
}

type ProfilePost = BasePost | FeedPost;

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState<"closet" | "saved">("closet");
  const screenWidth = Dimensions.get("window").width;
  const spacing = 12;
  const postWidth = screenWidth - spacing * 2;
  const router = useRouter();

  const displayedPosts: ProfilePost[] =
    selectedTab === "closet" ? closetItems : postsData;

  return (
    <ScrollView contentContainerStyle={{ padding: spacing }}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=15" }}
          style={styles.profilePic}
        />
        <Text style={styles.username}>Username</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => router.push("../components/editprofile")}
        >
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "closet" && styles.tabSelected]}
          onPress={() => setSelectedTab("closet")}
        >
          <Text style={styles.tabText}>YourCloset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "saved" && styles.tabSelected]}
          onPress={() => setSelectedTab("saved")}
        >
          <Text style={styles.tabText}>Saved</Text>
        </TouchableOpacity>
      </View>

      {/* Posts */}
      {displayedPosts.map((post) => (
        <View key={post.id} style={[styles.postContainer, { width: postWidth }]}>
          {/* Only show user info if it exists */}
          {"user" in post && "userAvatar" in post && (
            <View style={styles.userContainer}>
              <Image source={{ uri: post.userAvatar }} style={styles.userAvatar} />
              <Text style={styles.usernameSmall}>{post.user}</Text>
            </View>
          )}

          <Image source={{ uri: post.image }} style={styles.postImage} />
          <View style={styles.postContent}>
            <Text style={styles.description}>{post.description}</Text>

            {"likes" in post && "comments" in post && (
              <Text style={styles.stats}>❤️ {post.likes}  💬 {post.comments}</Text>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: "center", marginBottom: 16 },
  profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
  username: { fontWeight: "bold", fontSize: 20 },
  editButton: {
    marginTop: 8,
    backgroundColor: "#2196F3",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  editText: { color: "#fff", fontWeight: "bold" },
  tabContainer: { flexDirection: "row", justifyContent: "center", marginBottom: 16 },
  tabButton: { paddingHorizontal: 20, paddingVertical: 6, marginHorizontal: 4, borderRadius: 6, backgroundColor: "#eee" },
  tabSelected: { backgroundColor: "#2196F3" },
  tabText: { color: "#000", fontWeight: "bold" },
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
  userContainer: { flexDirection: "row", alignItems: "center", padding: 10 },
  userAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  usernameSmall: { fontWeight: "bold", fontSize: 16, flex: 1 },
  postImage: { width: "100%", height: 250, resizeMode: "cover" },
  postContent: { padding: 10 },
  description: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  stats: { fontSize: 14, color: "#555" },
});
