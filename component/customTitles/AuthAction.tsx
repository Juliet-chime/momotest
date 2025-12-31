import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";

const AuthAction = ({ isLogin = true }: { isLogin?: boolean }) => {
    return (
        <Link
            href={isLogin ? "/(auth)/register" : "/(auth)/login"}
            style={styles.linkWrapper}
            selectionColor={'red'}

        >
            <Text style={styles.textStyle}>
                {isLogin ? <>Don’t have an account?</> : <>Already have an account?</>}{" "}
                <Text style={styles.actionText}>{isLogin ? "Register" : "Login"}</Text>
            </Text>
        </Link>
    );
};

export default AuthAction;

const styles = StyleSheet.create({
    linkWrapper: {
        marginTop: 16,
    },
    textStyle: {
        color: "black",
        textAlign: "center",
    },
    actionText: {
        fontWeight: 700,
    },
});
