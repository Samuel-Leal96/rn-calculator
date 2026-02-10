import { Pressable, Text } from 'react-native';

interface BtnCalculatorProps {
    title: string;
    onPress: () => void;
    color?: string;
}

const BtnCalculator = ({ title, onPress, color }: BtnCalculatorProps) => {
    return (
        <Pressable>
            <Text>BtnCalculator</Text>
        </Pressable>
    )
}

export default BtnCalculator