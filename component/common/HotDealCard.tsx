import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { ItemProps } from "./type";

interface HotDealCardProps extends PressableProps {
    item?: ItemProps;
}
const HotDealCard = ({ item, ...props }: HotDealCardProps) => {
    return (
        <Pressable style={styles.item} {...props}>
            {/* <Image source={{ uri: item?.image }} style={styles.image} /> */}
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.validity}>{item?.validity}</Text>
            <Text style={styles.price}>{item?.price}</Text>
            {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity> */}
        </Pressable>
    );
};

export default HotDealCard;

const styles = StyleSheet.create({
    item: {
        width: 250,
        borderWidth: 1,
        borderColor: "#FFCC08",
        marginRight: 10,
        borderRadius: 10,
        padding: 10,
        boxShadow: "0 4px 6px rgba(0,0,0,,0.1)",
        gap: 5,
        cursor: 'pointer'
    },
    image: {
        width: 50,
        height: 50,
        alignSelf: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFCC08",
    },
    validity: {
        fontSize: 14,
        color: "rgba(255, 204, 8, 0.8)",
    },
    price: {
        fontSize: 16,
        fontWeight: "700",
        color: "#FFCC08",
    },
    button: {
        backgroundColor: "#FFCC08",
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
    },
    buttonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});
