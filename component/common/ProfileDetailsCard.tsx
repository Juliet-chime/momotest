import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileDetailsCard = ({ title, value }: { title?: string, value?: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}:</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default ProfileDetailsCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    title: {
        fontWeight: 700,
        fontSize: 16,
        color: 'white'
    },
    value: {
        fontWeight: 300,
        fontSize: 12,
        color: 'white'
    }
})