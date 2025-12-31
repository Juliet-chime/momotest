import AppContext from "@/service/context";
import { Redirect } from "expo-router";
import { useContext } from "react";

export default function Index() {

    const { user } = useContext(AppContext)!;

    return user?.isLoggedIn
        ? <Redirect href="/(tabs)" />
        : <Redirect href="/(auth)/login" />;
}
