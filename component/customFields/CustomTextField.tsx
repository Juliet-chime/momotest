import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import CustomError from "../customTitles/CustomError";
import CustomLabel from "../customTitles/CustomLabel";

interface CustomTextFieldProps extends TextInputProps {
    placeholder?: string;
    style?: any;
    placeholderColor?: string;
    error?: string;
    label?: string;
    onBlur?: () => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
    placeholder,
    style,
    placeholderColor,
    error,
    label,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={styles.inputWrapper}>
            <CustomLabel label={label} />
            <TextInput
                {...props}
                placeholder={placeholder}
                style={[
                    styles.inputStyles,
                    style,
                    { borderColor: isFocused ? "#042748ff" : "black" },
                ]}
                placeholderTextColor={placeholderColor || "black"}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setIsFocused(false);
                }}
            />
            <CustomError error={error} />
        </View>
    );
};

export default CustomTextField;

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: 15,
    },
    inputStyles: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        height: 44,
        padding: 12,
    },
});
