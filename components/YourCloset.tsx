import React from "react";
import { Dimensions, Image, Platform, StyleSheet, Text, View } from "react-native";

// Example closet posts with free images
export const closetItems = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Casual streetwear vibe",
    tags: ["#casual", "#streetwear", "#relaxed"],
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Denim style jeans",
    tags: ["#denim", "#jeans", "#vintage"],
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Summer dress aesthetic",
    tags: ["#summer", "#floral", "#light"],
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Leather jacket energy",
    tags: ["#leather", "#jacket", "#edgy"],
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Leather jacket energy",
    tags: ["#leather", "#jacket", "#edgy"],
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Leather jacket energy",
    tags: ["#leather", "#jacket", "#edgy"],
  },
];



export default function YourCloset() {
  const screenWidth = Dimensions.get("window").width;

  // Limit container width on web to avoid overly stretched layout
  const containerMaxWidth = Platform.OS === "web" ? 900 : screenWidth;

  // Number of columns
  const numColumns = Platform.OS === "web" ? 3 : screenWidth > 600 ? 2 : 1;

  // Calculate post width with more spacing
  const spacing = 12;
  const postWidth = (containerMaxWidth - spacing * (numColumns + 1)) / numColumns;

  return (
    <View style={[styles.outerContainer, { maxWidth: containerMaxWidth, alignSelf: "center" }]}>
      {closetItems.map((item) => (
        <View
          key={item.id}
          style={[
            styles.postContainer,
            { width: postWidth, marginLeft: spacing, marginBottom: spacing },
          ]}
        >
          <Image source={{ uri: item.image }} style={styles.postImage} />
          <View style={styles.postContent}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.tags}>{item.tags.join(" ")}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingVertical: 16,
  },
  postContainer: {
    backgroundColor: "#fff",
    borderRadius: 20, 
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },
  postImage: {
    width: "100%",
    height: 350, 
    resizeMode: "cover",
  },
  postContent: {
    padding: 14,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  tags: {
    fontSize: 14,
    color: "#555",
  },
});
