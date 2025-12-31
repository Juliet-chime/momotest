import momoit from "@/assets/images/momoit.jpg";
import { Link } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={momoit} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.linkWrapper}>
            <Link href={"/(auth)/login"} style={styles.text}>
              Login
            </Link>

            <Link href={"/(auth)/register"} style={styles.text}>
              Register
            </Link>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0)",
    position: "relative",
  },
  linkWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    bottom: 100,
  },
  text: {
    color: "#0d2731ff",
    fontSize: 16,
    borderRadius: 8,
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    fontWeight: "bold",
  },
});
