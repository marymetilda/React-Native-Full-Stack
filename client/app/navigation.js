import ScreenMenu from "../components/menus/ScreenMenu";
import { AuthProvider } from "../context/authContext";
import React from "react";

const RootNavigation = () => {
  return (
    <AuthProvider>
      <ScreenMenu />
    </AuthProvider>
  );
};

export default RootNavigation;
