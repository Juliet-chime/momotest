import CustomTab from '@/component/common/CustomTab'
import CustomTextField from '@/component/customFields/CustomTextField'
import CustomTitle from '@/component/customTitles/CustomTitle'
import { airtimeAmounts, airtimeTabOptions } from '@/data/datalist'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Airtime = () => {

    const [selectedTab, setSelectedTab] =
        useState("self");

    const [selectedAmount, setSelectedAmount] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [isSelected, setIsSelected] = useState(false)

    const handleProceed = () => {
        alert(`You can have purchased #${selectedAmount}`)
    }

    const onEndAmountEditing = (e: any) => {
        const value = e.nativeEvent.text;
        if (+value < 50) {
            setError('Amount should be greater than #50')
            return
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <CustomTitle title="Buy Airtime" showNavigationIcon={true} />
            <CustomTab tabOptions={airtimeTabOptions} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <View>
                {selectedTab === 'others' ? <CustomTextField
                    placeholder="Enter Phone number"
                    keyboardType='phone-pad'
                    placeholderColor={'white'}
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    style={{ borderColor: '#FFCC08', color: 'white' }}
                /> : null}

                <Text style={styles.label}>Select Amount:</Text>

                <View style={styles.amountContainer}>
                    {airtimeAmounts.map((amount) => (
                        <TouchableOpacity
                            key={amount.id}
                            style={[
                                styles.amountButton,
                                selectedAmount === amount.amount && isSelected && styles.selectedAmountButton,
                            ]}
                            onPress={() => {
                                setIsSelected(true)
                                setSelectedAmount(amount.amount)
                            }}
                        >
                            <Text style={styles.amountText}>₦{amount.amount}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={styles.label}>Or Enter Custom Amount:</Text>

                    <CustomTextField
                        placeholder="Enter Amount"
                        keyboardType='numeric'
                        style={{ borderColor: '#FFCC08', color: 'white' }}
                        value={!isSelected ? selectedAmount : ''}
                        onChangeText={(text) => {
                            setIsSelected(false)
                            setError('')
                            setSelectedAmount(text)
                        }}
                        error={error}
                        returnKeyType='done'
                        onEndEditing={onEndAmountEditing}
                        placeholderColor={'white'}
                    />
                </View>

                <TouchableOpacity style={[styles.proceedButton, !!error ? { opacity: 0.4 } : {}]} onPress={handleProceed} disabled={!!error}>
                    <Text style={styles.proceedButtonText}>Proceed</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Airtime

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
        backgroundColor: "black",
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: 'white'
    },
    amountContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    amountButton: {
        width: '20%',
        height: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    selectedAmountButton: {
        backgroundColor: '#FFCC08',
    },
    amountText: {
        fontSize: 16,
    },
    proceedButton: {
        height: 40,
        backgroundColor: '#FFCC08',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 5,
    },
    proceedButtonDisabled: {
        opacity: 0.1,
    },
    proceedButtonText: {
        fontSize: 16,
        color: '#000',
    },
})