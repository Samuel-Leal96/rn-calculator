import ThemeText from '@/components/ThemeText'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { Text, View } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>

            <ThemeText variant='primary'
            >50 x 50
            </ThemeText>

            <Text style={globalStyles.subResult}>
                250
            </Text>

            <ThemeText>
                Hola mundo
            </ThemeText>

        </View>
    )
}

export default CalculatorApp