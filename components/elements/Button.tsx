import { Text, type TextProps, StyleSheet, TouchableOpacity } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { TextType } from './TextType';
import { ReactNode } from 'react';

export type ButtonProps = TextProps & {
    children?: ReactNode;
    lightColor?: string;
    darkColor?: string;
    type?: 'filled' | 'outline';
    onPress?: ()=> void;
    
};

export function Button({
    children,
    style,
    lightColor,
    darkColor,
    type = 'filled',
    onPress,
}: ButtonProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');


    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <TextType type='link'
                style={[
                    { color, backgroundColor },styles.default,
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
        fontSize: 20,
        marginHorizontal:10,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    filled: {
        
    },
    outline: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
