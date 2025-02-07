import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "../context/authContext";

export default function Index() {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <AuthProvider>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </AuthProvider>
    // </NavigationContainer>
  );
}
