import BalanceCard from "@/component/common/BalanceCard";
import HotDealCard from "@/component/common/HotDealCard";
import QuckActionBtn from "@/component/common/QuckActionBtn";
import { ItemProps } from "@/component/common/type";
import CustomTitle from "@/component/customTitles/CustomTitle";
import { hotDeals } from "@/data/hotdeals";
import AppContext from "@/service/context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const HomePage = () => {
    const { user } = useContext(AppContext)!;
    const router = useRouter();
    const [hotDeal, setHotDeal] = useState<ItemProps | null>(null);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.guestContainer}>
                <View style={styles.nameIntialContainer}>
                    <Text style={styles.welcomeText}>
                        {user?.username?.slice(0, 1) || "U"}
                    </Text>
                </View>
                <View>
                    <Text style={styles.welcomeText}>
                        <Text>Yello,</Text> {user?.username}
                    </Text>
                    <Text style={styles.welcomeText}>09053677738</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View>
                    <CustomTitle title="Hot Deal 🚀" />
                    <FlatList
                        data={hotDeals}
                        renderItem={({ item }) => {
                            return (
                                <HotDealCard
                                    item={item}
                                    onPress={() => {
                                        alert(
                                            `You selected ${item.title} for ${item.validity} at ${item.price}`
                                        );
                                        setHotDeal(item);
                                    }}
                                />
                            );
                        }}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.container}
                    />
                </View>
                <View style={styles.balanceContainer}>
                    <Pressable style={styles.refreshBtn}>
                        <Text style={styles.refreshBtnText}>Refresh Balance</Text>
                        <EvilIcons name="refresh" size={24} color="#ffcc08ff" />
                    </Pressable>
                    <View style={styles.balanceWrapper}>
                        <BalanceCard title="Airtime Balance" value="₦5,000" />
                        <BalanceCard title="Data Balance" value="2.5GB" />
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <CustomTitle title="Quick Actions" />
                    <View style={styles.QuckActionBtnWrapper}>
                        <QuckActionBtn
                            title="Buy Airtime"
                            onPress={() => router.push("/airtime")}
                        />
                        <QuckActionBtn
                            title="Buy Data"
                            onPress={() => router.push("/data")}
                        />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 30,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderWidth: 1,
                        borderStyle: "dashed",
                        borderColor: "rgba(255, 255, 255, 0.1)",
                    }}
                >
                    <CustomTitle title="Market Place" />
                    <Text style={{ color: "white" }}>Mini Apps will appear here</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    guestContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        gap: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    nameIntialContainer: {
        width: 30,
        height: 30,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "rgba(255, 204, 8, 0.9)",
        alignItems: "center",
        justifyContent: "center",
    },
    welcomeText: {
        fontSize: 16,
        fontWeight: 400,
        color: "rgba(255, 204, 8, 0.9)",
    },
    contentContainer: {
        padding: 20,
    },

    balanceContainer: {
        marginTop: 20,
        padding: 16,
    },
    balanceWrapper: {
        flexDirection: "row",
        gap: 10,
    },

    refreshBtn: {
        padding: 10,
        borderWidth: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    refreshBtnText: {
        color: "#ffcc08ff",
    },
    QuckActionBtnWrapper: {
        flexDirection: "row",
        gap: 10,
    },
});
