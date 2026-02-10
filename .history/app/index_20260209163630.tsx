import BtnCalculator from '@/components/BtnCalculator'
import ThemeText from '@/components/ThemeText'
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
                <BtnCalculator label='C' onPress={() => console.log('C')} />
                <BtnCalculator label='+/-' onPress={() => console.log('+/-')} />
                <BtnCalculator label='%' onPress={() => console.log('%')} />
                <BtnCalculator label='÷' onPress={() => console.log('÷')} />
            </View>


        </View>
    )
}

export default CalculatorApp