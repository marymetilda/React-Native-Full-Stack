import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const SubmitButton = ({ buttonTitle, handleSubmit, loading }) => {
  return (
    <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
      <Text style={styles.btnText}>
        {loading ? "Please wait" : buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: "#1e2225",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 80,
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
  },
});

export default SubmitButton;
