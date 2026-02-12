import BtnCalculator from '@/components/BtnCalculator'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/theme'
import { useCalculator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {

    const { formula, prevNumber, buildNumber, clean, toogleSign, deleteLast } = useCalculator();


    return (
        <View style={globalStyles.calculatorContainer}>

            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='primary'>{formula}</ThemeText>

                {formula === prevNumber ? (
                    <ThemeText variant='primary'> </ThemeText>
                ) : (
                    <ThemeText variant='secondary'>{prevNumber}</ThemeText>
                )}


            </View>

            {/* Filas de botones */}

            {/* Primera fila */}
            <View style={globalStyles.row}>
                <BtnCalculator
                    label='C'
                    color={Colors.lightGray}
                    blackText
                    onPress={clean}
                />
                <BtnCalculator
                    label='+/-'
                    color={Colors.lightGray}
                    blackText
                    onPress={toogleSign}
                />
                <BtnCalculator
                    label='del'
                    color={Colors.lightGray}
                    blackText
                    onPress={deleteLast}
                />
                <BtnCalculator
                    label='÷'
                    color={Colors.orange}
                    onPress={() => console.log('÷')}
                />
            </View>

            {/* Segunda fila */}
            <View style={globalStyles.row}>
                <BtnCalculator label='7' onPress={() => buildNumber('7')} />
                <BtnCalculator label='8' onPress={() => buildNumber('8')} />
                <BtnCalculator label='9' onPress={() => buildNumber('9')} />
                <BtnCalculator
                    label='X'
                    color={Colors.orange}
                    onPress={() => console.log('X')}
                />
            </View>

            {/* Tercera fila */}
            <View style={globalStyles.row}>
                <BtnCalculator label='4' onPress={() => buildNumber('4')} />
                <BtnCalculator label='5' onPress={() => buildNumber('5')} />
                <BtnCalculator label='6' onPress={() => buildNumber('6')} />
                <BtnCalculator
                    label='-'
                    color={Colors.orange}
                    onPress={() => console.log('-')}
                />
            </View>

            {/* Cuarta fila */}
            <View style={globalStyles.row}>
                <BtnCalculator label='1' onPress={() => buildNumber('1')} />
                <BtnCalculator label='2' onPress={() => buildNumber('2')} />
                <BtnCalculator label='3' onPress={() => buildNumber('3')} />
                <BtnCalculator
                    label='+'
                    color={Colors.orange}
                    onPress={() => console.log('+')}
                />
            </View>

            {/* Quinta fila */}
            <View style={globalStyles.row}>
                <BtnCalculator label='0' doubleSize onPress={() => buildNumber('0')} />
                <BtnCalculator label='.' onPress={() => buildNumber('.')} />

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