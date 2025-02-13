import { Text, type TextProps, StyleSheet, TouchableOpacity } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { TextType } from './TextType';
import { ReactNode } from 'react';
import { Box } from './Box';
import { Container } from './Container';
import { Ionicons } from '@expo/vector-icons';

export type ButtonProps = TextProps & {
    children?: ReactNode;
    lightColor?: string;
    darkColor?: string;
    type?: 'normal' | 'filled' | 'outline';
    onPress?: () => void;
    col?: boolean;
    round?: boolean,
    align?: 'center' | 'start',
    name: string,
    icon?: string,
    iconSize?: number,
    link?: boolean
};

export function Button({
    style,
    lightColor,
    darkColor,
    type,
    onPress,
    col,
    round,
    align,
    name,
    icon,
    iconSize = 18,
    link
}: ButtonProps) {
    const linkColor = useThemeColor({ light: lightColor, dark: darkColor }, 'link');
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const iconColor = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
        >
            <Container
                col={col}
                style={[
                    styles.default,
                    round && styles.round,
                    type === 'outline' && styles.outline,
                    type === 'filled' && { backgroundColor },
                    align === 'center' && styles.center,
                ]}
            >
                <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={iconSize} color={iconColor} />
                <TextType style={[{ color: link ? linkColor : color }, style]}>{name}</TextType>
            </Container>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    center: {
        alignItems: 'center',
        // textAlign: 'center'

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
        padding: 5,
        gap: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    outline: {
        borderWidth: 1,
        borderColor: '#000',
    },
});
