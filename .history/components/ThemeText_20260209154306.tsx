import React from 'react';
import { Text, type TextProps } from 'react-native';

interface ThemeTextProps extends TextProps {
    text?: string;
}

const ThemeText = ({ text }: ThemeTextProps) => {
    return (
        <Text style={{ color: 'white' }}>{text}</Text>
    )
}

export default ThemeText