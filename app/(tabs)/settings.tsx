import CustomTitle from "@/component/customTitles/CustomTitle";
import AppContext from "@/service/context";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
    const router = useRouter();
    const { setUser } = useContext(AppContext)!;
    const [loading, setLoading] = useState(false)

    const onLogout = () => {
        setLoading(true)
        setTimeout(() => {
            setUser(null)
            setLoading(false)
            router.replace("/(auth)/login");
        }, 3000)
    }
    return (
        <SafeAreaView style={styles.container}>
            <CustomTitle title="Settings" />

            <View style={styles.textWrapper}>
                <Text style={styles.text}>Notifications</Text>
                <Text style={styles.text}>Security</Text>
                <Text style={styles.text}>Privacy</Text>
                <Text style={styles.text}>About</Text>
            </View>

            <Pressable
                style={styles.logoutBtn}
                onPress={onLogout}
            >
                {loading ? <ActivityIndicator color='black' size={24} /> : <Text style={styles.logoutText}>Logout</Text>}
            </Pressable>
        </SafeAreaView>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
    },
    textWrapper: {
        marginTop: 20,
        gap: 10
    },
    text: {
        color: 'white'
    },
    logoutBtn: {
        marginTop: 30,
        padding: 14,
        borderWidth: 1,
        backgroundColor: '#ffcc08ff',
        width: 100,
        alignItems: 'center',
        borderRadius: 30
    },
    logoutText: {
        color: 'black'
    }
});
