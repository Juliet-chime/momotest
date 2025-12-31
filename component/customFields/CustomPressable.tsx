import React from "react";
import {
    ActivityIndicator,
    Pressable,
    PressableProps,
    StyleSheet,
    Text,
    View,
} from "react-native";

interface CustomPressableProps extends PressableProps {
    btnText?: string;
    disabled?: boolean;
    loading?: boolean;
}
const CustomPressable: React.FC<CustomPressableProps> = ({
    btnText,
    disabled,
    loading,
    ...props
}) => {
    return (
        <Pressable
            style={[styles.pressableStyle, { opacity: disabled ? 0.2 : 1 }]}
            {...props}
        >
            {loading ? (
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator size={20} color={"#FFCC08"} />
                    <Text style={styles.authText}>Authenticating</Text>
                </View>
            ) : (
                <Text style={styles.btnTextStyle}>{btnText}</Text>
            )}
        </Pressable>
    );
};

export default CustomPressable;

const styles = StyleSheet.create({
    pressableStyle: {
        backgroundColor: "black",
        padding: 14,
        borderRadius: 10,
    },
    btnTextStyle: {
        color: "#FFCC08",
        textAlign: "center",
        fontWeight: 700,
    },
    activityIndicatorWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    authText: {
        color: "#FFCC08",
        fontWeight: 700,
    },
});
