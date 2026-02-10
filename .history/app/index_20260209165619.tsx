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

            {/* Primera fila */}
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

            {/* Segunda fila */}
            <View style={globalStyles.row}>
                <BtnCalculator label='7' onPress={() => console.log('7')} />
                <BtnCalculator label='8' onPress={() => console.log('8')} />
                <BtnCalculator label='9' onPress={() => console.log('9')} />
                <BtnCalculator
                    label='X'
                    color={Colors.orange}
                    onPress={() => console.log('X')}
                />
            </View>

            {/* Tercera fila */}
            <View style={globalStyles.row}>
                <BtnCalculator label='4' onPress={() => console.log('4')} />
                <BtnCalculator label='5' onPress={() => console.log('5')} />
                <BtnCalculator label='6' onPress={() => console.log('6')} />
                <BtnCalculator
                    label='-'
                    color={Colors.orange}
                    onPress={() => console.log('-')}
                />
            </View>

            {/* Cuarta fila */}
            <View style={globalStyles.row}>
                <BtnCalculator label='1' onPress={() => console.log('1')} />
                <BtnCalculator label='2' onPress={() => console.log('2')} />
                <BtnCalculator label='3' onPress={() => console.log('3')} />
                <BtnCalculator
                    label='+'
                    color={Colors.orange}
                    onPress={() => console.log('+')}
                />
            </View>

            {/* Quinta fila */}
            <View style={globalStyles.row}>
                <BtnCalculator label='0' doubleSize onPress={() => console.log('0')} />
                <BtnCalculator label='.' onPress={() => console.log('.')} />

                <BtnCalculator
                    label='='
                    color={Colors.orange}
                    onPress={() => console.log('=')}
                />
            </View>


        </View>
    )
}

export default CalculatorApp