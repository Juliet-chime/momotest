import React from "react";
import { StyleSheet, Text } from "react-native";

const CustomLabel = ({
    label,
    style,
}: {
    label: string | undefined;
    style?: any;
}) => {
    return (
        <>
            {label ? <Text style={[styles.labelStyle, style]}>{label}</Text> : null}
        </>
    );
};

export default CustomLabel;

const styles = StyleSheet.create({
    labelStyle: {
        color: "black",
        marginBottom: 5,
        fontWeight: 400,
        fontSize: 14,
    },
});
