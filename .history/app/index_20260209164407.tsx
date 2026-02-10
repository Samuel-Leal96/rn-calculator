import BtnCalculator from '@/components/BtnCalculator'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/theme'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>

            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='primary'>
                    50 x 50
                </ThemeText>

                <ThemeText variant='secondary'>
                    250
                </ThemeText>
            </View>

            {/* Filas de botones */}
            <View style={globalStyles.row}>
                <BtnCalculator
                    label='C'
                    color={Colors.lightGray}
                    blackText
                    onPress={() => console.log('C')}
                />
                <BtnCalculator
                    label='+/-'
                    color={Colors.lightGray}
                    blackText
                    onPress={() => console.log('+/-')}
                />
                <BtnCalculator
                    label='%'
                    color={Colors.lightGray}
                    blackText
                    onPress={() => console.log('%')}
                />
                <BtnCalculator
                    label='÷'
                    color={Colors.orange}
                    onPress={() => console.log('÷')}
                />
            </View>


        </View>
    )
}

export default CalculatorApp