import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PostCard = ({ posts, myPostScreen }) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // handle delete promt
  const handleDeletePrompt = (id) => {
    Alert.alert("Attention", "Are you sure you want to delete this post?", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Delete Cancelled");
        },
      },
      {
        text: "Delete",
        onPress: handleDeletePost(id),
      },
    ]);
  };

  // delete post data
  const handleDeletePost = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.delete(`post/delete-post/${id}`);
      setLoading(false);
      alert(data?.message);
      navigation.navigate("Home");
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(error);
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Total Posts {posts?.length}</Text>
      {posts?.map((post) => (
        <View style={styles.card} key={post?._id}>
          {myPostScreen && (
            <View>
              <Text style={{ textAlign: "right" }}>
                <FontAwesome5
                  name="trash"
                  size={16}
                  color="red"
                  onPress={() => handleDeletePrompt(post?._id)}
                />
              </Text>
            </View>
          )}

          <Text style={styles.title}>Title: {post?.title}</Text>
          <Text style={styles.desc}>{post?.description}</Text>
          <View style={styles.footer}>
            {post?.postedBy?.name && (
              <Text>
                <FontAwesome5 name="user" color="orange" /> {"  "}
                {post?.postedBy?.name}
              </Text>
            )}
            <Text>
              <FontAwesome5 name="clock" color="orange" /> {"  "}
              {moment(post?.createdAt).format("DD:MM:YYYY")}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "green",
    textAlign: "center",
  },
  card: {
    width: "97%",
    backgroundColor: "#ffffff",
    borderWidth: 0.2,
    borderColor: "gray",
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    borderBottomWidth: 0.3,
    paddingBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  desc: {
    marginTop: 10,
  },
});

export default PostCard;
