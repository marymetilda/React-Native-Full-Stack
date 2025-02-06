import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import InputBox from "../../components/forms/InputBox";
import SubmitButton from "../../components/forms/SubmitButton";
import axios from "axios";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        setLoading(false);
        return Alert.alert("Please Fill All Fields");
      }

      const { data } = await axios.post(
        "http://192.168.1.74:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );

      setLoading(false);

      Alert.alert(data && data.message);
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTitle="NAME" value={name} setValue={setName} />
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
        Already Register? Please &nbsp;
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          LOGIN
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

export default Register;
