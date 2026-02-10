import ThemeText from '@/components/ThemeText'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>

            <View style={{ paddingHorizontal: 20 }}>
                <ThemeText variant='primary'>
                    50 x 50
                </ThemeText>

                <ThemeText variant='secondary'>
                    250
                </ThemeText>
            </View>

        </View>
    )
}

export default CalculatorApp