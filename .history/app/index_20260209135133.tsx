import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { Text, View } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <Text style={{ fontSize: 40, fontFamily: 'SpaceMono', color: 'white' }}>CalculatorApp</Text>
        </View>
    )
}

export default CalculatorApp