import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomTab = ({ tabOptions, dataOptions, selectedTab, setSelectedTab }: { tabOptions?: any; selectedTab?: string; dataOptions?: any; setSelectedTab?: any }) => {
    return (
        <View style={styles.tabContainer}>

            <FlatList
                data={tabOptions}
                horizontal
                renderItem={({ item }) => {
                    const value = item.value as keyof typeof dataOptions;
                    const selected = selectedTab === value;
                    return <TouchableOpacity
                        key={item.id}
                        style={[styles.tab, selected && styles.selectedTab]}
                        onPress={() => setSelectedTab(value)}
                    >
                        <Text style={[styles.tabText, selected && styles.tabTextActive]}>
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                }}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) =>
                    item.id
                }
            />
        </View>
    )
}

export default CustomTab

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    selectedTab: {
        borderBottomWidth: 2,
        borderColor: "#ffcc08ff",
    },
    tabText: {
        color: "#ffcc08ff",
    },
    tabTextActive: {
        color: "#ffcc08ff",
        fontWeight: 900,
    },
})