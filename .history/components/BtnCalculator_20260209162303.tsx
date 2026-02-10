import { globalStyles } from '@/styles/global-styles';
import { Pressable, Text } from 'react-native';

interface BtnCalculatorProps {
    title: string;
}

const BtnCalculator = ({ title }: BtnCalculatorProps) => {
    return (
        <Pressable style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>{title}</Text>
        </Pressable>
    )
}

export default BtnCalculator