import { AppProvider } from "@/service/context";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <AppProvider>
      <SafeAreaProvider >
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </AppProvider>
  );
}
