import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import FooterMenu from "../components/menus/FooterMenu";
import { PostContext } from "@/context/postContext";
import PostCard from "../components/PostCard";

const Home = () => {
  //global state
  const [posts, _, getAllPosts] = useContext(PostContext);
  const [refreshing, setRefreshing] = useState(false);

  //refresh controll
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getAllPosts();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
