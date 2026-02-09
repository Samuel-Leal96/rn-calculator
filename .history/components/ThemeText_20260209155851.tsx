import React from 'react';
import { Text, type TextProps } from 'react-native';

interface ThemeTextProps extends TextProps {
    variant?: 'primary' | 'secondary';
}

const ThemeText = ({ children, ...props }: ThemeTextProps) => {
    return (
        <Text
            style={{ color: 'white' }}
            {...props}
        >
            {children}
        </Text>
    )
}

export default ThemeText