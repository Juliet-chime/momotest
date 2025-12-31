import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";

interface QuckActionBtnProps extends TouchableOpacityProps {
    title?: string;
}
const QuckActionBtn: React.FC<QuckActionBtnProps> = ({ title, ...props }) => {
    return (
        <TouchableOpacity style={styles.btnStyle} {...props}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default QuckActionBtn;

const styles = StyleSheet.create({
    btnStyle: {
        padding: 16,
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 10,
    },
    title: {
        color: "white",
    },
});
