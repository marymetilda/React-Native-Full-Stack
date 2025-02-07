import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [posts, setPosts] = useState();

  // get posts
  const getAllPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/post/get-all-posts");
      setLoading(false);
      setPosts(data?.posts);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Initial posts
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={[posts, setPosts]}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
