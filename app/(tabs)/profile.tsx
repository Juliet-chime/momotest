import ProfileDetailsCard from "@/component/common/ProfileDetailsCard";
import CustomTitle from "@/component/customTitles/CustomTitle";
import AppContext from "@/service/context";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    const { user } = useContext(AppContext)!;
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <CustomTitle title="Profile" />

                <View style={styles.profiledetailsWrapper}>
                    <ProfileDetailsCard title='Name' value={user?.username} />
                    <ProfileDetailsCard title='Email' value={'johndoe@email.com'} />
                    <ProfileDetailsCard title='Phone' value={'09026378990'} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
    },
    profiledetailsWrapper: {
        marginTop: 20
    }
});
