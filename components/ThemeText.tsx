import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { Text, type TextProps } from 'react-native';

interface ThemeTextProps extends TextProps {
    variant?: 'primary' | 'secondary';
}

const ThemeText = ({ children, variant = 'primary', ...props }: ThemeTextProps) => {
    return (
        <Text
            style={
                [
                    { color: 'white', fontFamily: 'SpaceMono' },
                    variant === 'primary' && globalStyles.mainResult,
                    variant === 'secondary' && globalStyles.subResult,
                ]
            }
            numberOfLines={1}
            adjustsFontSizeToFit
            {...props}
        >
            {children}
        </Text>
    )
}

export default ThemeText