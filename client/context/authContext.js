import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Context
const AuthContext = createContext();

// Provider
const AuthProvider = ({ children }) => {
  // Global State
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  // default axios setting
  axios.defaults.baseURL = "http://192.168.1.74:8080/api/v1";

  // initial local storage data
  useEffect(() => {
    const loadLocalStorageData = async () => {
      let data = await AsyncStorage.getItem("@auth");
      let loginData = JSON.parse(data);
      setState({ ...state, user: loginData?.user, token: loginData?.token });
    };

    loadLocalStorageData();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
