import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import FooterMenu from "../components/menus/FooterMenu";
import { PostContext } from "@/context/postContext";
import PostCard from "../components/PostCard";

const Home = () => {
  // Global State
  const [posts] = useContext(PostContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard posts={posts} />
      </ScrollView>
      <View style={{ backgroundColor: "#ffffff" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
});

export default Home;
