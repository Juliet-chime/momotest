import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BalanceCard = ({ title, value }: { title?: string; value?: string }) => {
    return (
        <View style={styles.balanceItemWrapper}>
            <Text style={[styles.textStyle, { fontWeight: 300 }]}>{title}</Text>
            <Text style={[styles.textStyle]}>{value}</Text>
        </View>
    );
};

export default BalanceCard;

const styles = StyleSheet.create({
    balanceItemWrapper: {
        borderWidth: 1,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderStyle: "dotted",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        gap: 5,
    },
    textStyle: {
        color: "white",
        fontSize: 14,
        fontWeight: 600,
    },
});
