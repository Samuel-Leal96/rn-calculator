import React from 'react';
import { Text } from 'react-native';

interface ThemeTextProps {
    text?: string;
}

const ThemeText = ({ text }: ThemeTextProps) => {
    return <Text style={{ color: 'white' }}>{text}</Text>;

};

export default ThemeText