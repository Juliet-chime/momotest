import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const TabItem = ({
    title,
    icon,
    iconProps,
    focused,
}: {
    title?: string;
    icon?: any;
    iconProps?: any;
    focused?: boolean;
}) => {
    const Icon = icon;
    return (
        <View style={styles.tabBarWrapper}>
            <Icon
                color={focused ? "rgba(255, 204, 8, 0.9)" : "white"}
                size={focused ? 20 : 18}
                {...iconProps}
            />
            <Text
                style={[
                    styles.title,
                    { color: focused ? "rgba(255, 204, 8, 0.9)" : "#fff" },
                ]}
            >
                {title}
            </Text>
        </View>
    );
};

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "transparent",
                    height: 40,
                    borderWidth: 1,
                    position: "absolute",
                    overflow: "hidden",
                    marginHorizontal: 30,
                    marginBottom: 20,
                    borderRadius: 50,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabItem
                            focused={focused}
                            icon={FontAwesome5}
                            iconProps={{ name: "house-user" }}
                            title="Home"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,

                    tabBarIcon: ({ color, focused }) => (
                        <TabItem
                            focused={focused}
                            icon={AntDesign}
                            iconProps={{ name: "profile" }}
                            title="Profile"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    headerShown: false,

                    tabBarIcon: ({ color, focused }) => (
                        <TabItem
                            focused={focused}
                            icon={Feather}
                            iconProps={{ name: "settings" }}
                            title="Settings"
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBarWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        width: 80,
        alignSelf: "center",
    },
    title: {
        fontSize: 12,
        fontWeight: 700,
    },
});
