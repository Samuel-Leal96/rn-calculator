import { Pressable, Text } from 'react-native';

interface BtnCalculatorProps {
    title: string;
}

const BtnCalculator = ({ title }: BtnCalculatorProps) => {
    return (
        <Pressable>
            <Text>{title}</Text>
        </Pressable>
    )
}

export default BtnCalculator