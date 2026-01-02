import CustomTab from "@/component/common/CustomTab";
import { DataProps } from "@/component/common/type";
import CustomTitle from "@/component/customTitles/CustomTitle";
import { dataOptions, tabOptions } from "@/data/datalist";
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from "react";
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Data = () => {
    const [selectedTab, setSelectedTab] =
        useState<keyof typeof dataOptions>("daily");

    const renderItem = ({ item }: { item: DataProps }) => (
        <View style={styles.item}>
            <View style={styles.dataHeaderContainer}>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.price}>{item?.price}</Text>
            </View>
            <Text style={styles.validity}>{item?.validity}</Text>
            <View style={styles.actionBtnWrapper}>
                <Pressable style={styles.moreInfoBtn}>
                    <View style={styles.moreInfoWrapper}>
                        <AntDesign name="info-circle" size={14} color="rgba(255, 204, 8, 0.5)" /><Text style={styles.moreInfoBtnText}>More Info</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.buyNowBtn} onPress={() => {
                    alert(`You have selected ${item.title} at ${item.price} valid for ${item.validity}`)
                }}>
                    <Text style={styles.buyNowBtnText}>Buy Now</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <CustomTitle title="Buy Data" showNavigationIcon={true} />

            <CustomTab tabOptions={tabOptions} dataOptions={dataOptions} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            <FlatList
                data={dataOptions[selectedTab]}
                renderItem={renderItem}
                keyExtractor={(item: DataProps) =>
                    item.id?.toString() ?? Math.random().toString()
                }
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default Data;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
        backgroundColor: "black",
    },
    item: {
        padding: 20,
        backgroundColor: "rgba(255, 204, 8, 0.1)",
        marginVertical: 5,
        borderRadius: 10,
    },
    dataHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
    },
    validity: {
        fontSize: 14,
        color: "#666",
        fontWeight: 700,
        marginTop: 10,
    },
    price: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
    },
    actionBtnWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    moreInfoWrapper: {
        flexDirection: 'row',
        gap: 5
    },
    moreInfoBtn: {
        borderWidth: 1,
        borderColor: 'rgba(255, 204, 8, 0.5)',
        padding: 10,
        borderRadius: 50
    },
    moreInfoBtnText: {
        color: 'rgba(255, 204, 8, 0.5)',

    },
    buyNowBtn: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 204, 8, 0.5)'
    },
    buyNowBtnText: {
        color: '#fff',
        fontSize: 12
    }
});
