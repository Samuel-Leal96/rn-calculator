import { globalStyles } from '@/styles/global-styles';
import { Pressable, Text } from 'react-native';

interface BtnCalculatorProps {
    label: string;
    color: string;
    blackText?: boolean;
    onPress: () => void;
}

const BtnCalculator = ({ label: title, color, blackText, onPress }: BtnCalculatorProps) => {
    return (
        <Pressable
            style={globalStyles.button}
            onPress={onPress}>
            <Text style={globalStyles.buttonText}>{title}</Text>
        </Pressable>
    )
}

export default BtnCalculator