import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/context/authContext";

const Home = () => {
  // Global State
  const [state] = useContext(AuthContext);

  return (
    <View>
      <Text>Test</Text>
      <Text>{JSON.stringify(state, null, 4)}</Text>
    </View>
  );
};

export default Home;
