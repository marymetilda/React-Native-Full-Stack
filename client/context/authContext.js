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

  let token = state && state.token;

  // default axios setting
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.baseURL =
    "https://react-native-server-4dmr.onrender.com/api/v1";

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
