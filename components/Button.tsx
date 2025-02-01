import { Text, type TextProps, StyleSheet, TouchableOpacity } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { TextType } from './TextType';
import { ReactNode } from 'react';

export type ButtonProps = TextProps & {
    children?: ReactNode;
    lightColor?: string;
    darkColor?: string;
    type?: 'filled' | 'outline';
};

export function Button({
    children,
    style,
    lightColor,
    darkColor,
    type = 'filled',
}: ButtonProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');


    return (
        <TouchableOpacity activeOpacity={0.6}>
            <TextType type='link'
                style={[
                    { color, backgroundColor },
                    type === 'filled' ? styles.filled : undefined,
                    type === 'outline' ? styles.outline : undefined,
                    style,
                ]}
            >
                {children}
            </TextType>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    filled: {
    },
    outline: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
