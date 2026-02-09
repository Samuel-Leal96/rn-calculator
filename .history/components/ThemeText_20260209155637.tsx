import React from 'react';
import { Text, type TextProps } from 'react-native';

interface ThemeTextProps extends TextProps {
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