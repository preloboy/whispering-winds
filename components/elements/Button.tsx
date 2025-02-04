import { Text, type TextProps, StyleSheet, TouchableOpacity } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { TextType } from './TextType';
import { ReactNode } from 'react';
import { Box } from './Box';
import { Container } from './Container';

export type ButtonProps = TextProps & {
    children?: ReactNode;
    lightColor?: string;
    darkColor?: string;
    type?: 'normal' | 'filled' | 'outline';
    onPress?: () => void;
    col?: boolean;
    round?: boolean,
    align?: 'center' | 'start'
};

export function Button({
    children,
    style,
    lightColor,
    darkColor,
    type = 'filled',
    onPress,
    col,
    round,
    align
}: ButtonProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');


    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
        >
            <Container
                col={col}
                style={[
                    { color, backgroundColor }, styles.default,
                    round && styles.round,
                    type === 'outline' ? styles.outline : undefined,
                    type === 'normal' ? styles.normal : undefined,
                    align ==='center' && styles.center,
                    style,
                ]}
            >
                {children}
            </Container>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    center:{
        textAlign:'center'
    },
    round: {
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    default: {
        fontSize: 16,
        marginHorizontal: 10,
        fontWeight: 'bold',
        padding: 10,
        gap: 5,
        alignItems: 'center',
    },
    normal: {

    },
    outline: {
        borderWidth: 1,
        borderColor: '#000',
    },
});
