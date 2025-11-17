import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function EditProfile({ onClose }: { onClose: () => void }) {
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <Text>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />

      <Text>Profile Picture URL:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter image URL"
        value={profilePic}
        onChangeText={setProfilePic}
      />

      <Image
        source={profilePic ? { uri: profilePic } : undefined}
        style={styles.previewImage}
      />

      <TouchableOpacity style={styles.button} onPress={onClose}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 12, borderRadius: 6 },
  previewImage: { width: 100, height: 100, borderRadius: 50, marginVertical: 12, backgroundColor: "#eee" },
  button: { backgroundColor: "#2196F3", padding: 12, borderRadius: 6, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
