import React from 'react'
import { StyleSheet, Text } from 'react-native'

const CustomError = ({ error }: { error: string | undefined }
) => {
    return (
        <>
            {error ? <Text style={styles.errorStyle}>{error}</Text> : null}
        </>
    )
}

export default CustomError

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red',
        fontSize: 12,
        fontWeight: 300,
        marginTop: 5
    }
})