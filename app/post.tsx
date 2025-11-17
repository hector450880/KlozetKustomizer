import React, { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PostPage() {
  const [image, setImage] = useState<string | null>(null);
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  // Mock upload function
  const handleUpload = () => {
    setImage("https://via.placeholder.com/300x400.png?text=Uploaded+Image");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create Your Closet Post</Text>

      {/* Image Upload */}
      <View style={styles.section}>
        <Text style={styles.label}>Upload Image</Text>
        {image ? (
          <Image source={{ uri: image }} style={styles.imagePreview} />
        ) : (
          <View style={styles.placeholderBox}>
            <Text style={styles.placeholderText}>Image Here</Text>
          </View>
        )}
        <Button title="Upload Image" onPress={handleUpload} />
      </View>

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Casual outfit, summer vibes..."
          value={description}
          onChangeText={setDescription}
        />
      </View>

      {/* Tags */}
      <View style={styles.section}>
        <Text style={styles.label}>Tags (comma separated)</Text>
        <TextInput
          style={styles.input}
          placeholder="#casual,#summer"
          value={tags}
          onChangeText={setTags}
        />
      </View>

      {/* Category */}
      <View style={styles.section}>
        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          placeholder="Casual, Formal, Streetwear..."
          value={category}
          onChangeText={setCategory}
        />
      </View>

      {/* Link */}
      <View style={styles.section}>
        <Text style={styles.label}>Link to Buy</Text>
        <TextInput
          style={styles.input}
          placeholder="https://www.hm.com/..."
          value={link}
          onChangeText={setLink}
        />
      </View>

      {/* Submit */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Post to Your Closet</Text>
      </TouchableOpacity>

      {/* Live Preview */}
      <View style={styles.previewContainer}>
        <Text style={styles.previewTitle}>Post Preview</Text>
        <View style={styles.previewImageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <View style={styles.placeholderBox}>
              <Text style={styles.placeholderText}>Image Here</Text>
            </View>
          )}
        </View>
        <Text style={styles.previewDescription}>{description || "Description here..."}</Text>
        <Text style={styles.previewTags}>{tags || "#tags here"}</Text>
        {category ? <Text style={styles.previewCategory}>Category: {category}</Text> : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  section: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  imagePreview: { width: "100%", height: 200, marginBottom: 10, borderRadius: 10 },
  placeholderBox: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  placeholderText: { color: "#888", fontSize: 16 },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  previewContainer: {
    marginTop: 30,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  previewTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  previewImageContainer: { marginBottom: 10 },
  previewImage: { width: "100%", height: 200, borderRadius: 10 },
  previewDescription: { fontSize: 16, fontWeight: "bold", marginBottom: 6 },
  previewTags: { fontSize: 14, color: "#555", marginBottom: 4 },
  previewCategory: { fontSize: 14, fontStyle: "italic", color: "#777" },
});
