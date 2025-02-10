import { View, StyleSheet, ScrollView, Text } from "react-native";
import FooterMenu from "@/components/menus/FooterMenu";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "@/components/PostCard";

const MyPosts = () => {
  // state
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // get user post
  const getUserPosts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/post/get-user-posts");
      setLoading(false);
      setPosts(data?.userPosts);
    } catch (error) {
      setLoading(true);
      console.log(error);
      alert(error);
    }
  };

  // initial
  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard posts={posts} myPostScreen={true} />
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

export default MyPosts;
