import ScreenMenu from "../components/menus/ScreenMenu";
import { AuthProvider } from "../context/authContext";
import { PostProvider } from "../context/postContext";
import React from "react";

const RootNavigation = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <ScreenMenu />
      </PostProvider>
    </AuthProvider>
  );
};

export default RootNavigation;
