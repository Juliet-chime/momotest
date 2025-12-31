import React from "react";
import { StyleSheet, Text } from "react-native";

const AuthHeader = ({ title }: { title?: string }) => {
  return <Text style={styles.HeaderTitle}>{title}</Text>;
};

export default AuthHeader;

const styles = StyleSheet.create({
  HeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
