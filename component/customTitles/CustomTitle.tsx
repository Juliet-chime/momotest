import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomTitle = ({ title, style }: { title?: string; style?: any }) => {
    return (
        <View>
            <Text style={[styles.titleStyle, style]}>{title}</Text>
        </View>
    );
};

export default CustomTitle;

const styles = StyleSheet.create({
    titleStyle: {
        marginTop: 10,
        marginBottom: 20,
        color: "white",
        fontWeight: 900,
        fontSize: 20,
    },
});
