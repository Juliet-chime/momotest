import CustomPressable from "@/component/customFields/CustomPressable";
import CustomTextField from "@/component/customFields/CustomTextField";
import AuthAction from "@/component/customTitles/AuthAction";
import AuthHeader from "@/component/customTitles/AuthHeader";
import AppContext from "@/service/context";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const router = useRouter();
  const { setUser } = useContext(AppContext)!;
  const [usernameError, setUserNameError] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeUserNameInput = (e: any) => {
    const value = e.nativeEvent.text;
    setUserName(value);
  };

  const onEndUserNameEditing = (e: any) => {
    const value = e.nativeEvent.text;
    if (!value) {
      setUserNameError("Email is required");
    } else {
      setUserNameError("");
    }
  };

  const onChangePasswordInput = (e: any) => {
    const value = e.nativeEvent.text;
    setPassword(value);
  };
  const onEndPasswordEditing = (e: any) => {
    const value = e.nativeEvent.text;
    if (!value) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const onLoginPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUser({
        username,
        isLoggedIn: true,
        token: 'fake-jwt-token'
      });
      alert(`${username} logged in`);
      router.replace("/(tabs)");
    }, 3000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginBox}>
        <AuthHeader title="Welcome Back" />
        <View style={{ marginTop: 30 }}>
          <CustomTextField
            placeholder="Enter your user name"
            label="User Name"
            onChange={onChangeUserNameInput}
            value={username}
            error={usernameError}
            onEndEditing={onEndUserNameEditing}
          />
          <CustomTextField
            placeholder="Enter your Password"
            label="Password"
            value={password}
            onChange={onChangePasswordInput}
            error={passwordError}
            onEndEditing={onEndPasswordEditing}
          />
          <CustomPressable
            btnText="Login"
            disabled={!!usernameError || !!passwordError}
            onPress={onLoginPress}
            loading={loading}
          />
          <AuthAction />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC08",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    width: "90%",
    padding: 20,
  },
});
