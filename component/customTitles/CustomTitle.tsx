import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomTitle = ({
  title,
  style,
  showNavigationIcon=false,
}: {
  title?: string;
  style?: any;
  showNavigationIcon?: boolean;
}) => {
  const router = useRouter();
  return (
    <View style={styles.titleWrapper}>
      <Pressable
        onPress={() => {
          router.back();
        }}
        style={{marginTop:-5}}
      >
        {showNavigationIcon ? (
          <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
        ) : null}
      </Pressable>
      <Text style={[styles.titleStyle, style]}>{title}</Text>
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  titleStyle: {
    marginTop: 10,
    marginBottom: 20,
    color: "white",
    fontWeight: 900,
    fontSize: 20,
  },
});
