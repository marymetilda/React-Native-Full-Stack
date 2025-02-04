import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import InputBox from "../../components/forms/InputBox";
import SubmitButton from "../../components/forms/SubmitButton";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!email || !password) {
        setLoading(false);
        return Alert.alert("Please Fill All Fields");
      }
      console.log("Login Data ===> ", { email, password });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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
      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
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
