import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/authContext";
import { Alert, StyleSheet, Text, View } from "react-native";
import InputBox from "../../components/forms/InputBox";
import SubmitButton from "../../components/forms/SubmitButton";

const Login = ({ navigation }) => {
  // Global State
  const [state, setState] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        setLoading(false);
        return Alert.alert("Please Fill All Fields");
      }

      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });
      setState(data);
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      alert(data && data.message);
      navigation.navigate("Home");

      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(error.response.data.message);
      console.log(error);
    }
  };

  // temp function to check local storage data
  // const getLocalStorageData = async () => {
  //   const data = await AsyncStorage.getItem("@auth");
  //   console.log("local storage", data);
  // };

  // getLocalStorageData();

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          inputTitle="EMAIL"
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle="PASSWORD"
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      <SubmitButton
        handleSubmit={handleSubmit}
        buttonTitle={"Submit"}
        loading={loading}
      />
      <Text style={styles.linkText}>
        Not a user? Please &nbsp;
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginBottom: 20,
  },
  linkText: {
    textAlign: "center",
  },
  link: {
    color: "red",
  },
});

export default Login;
