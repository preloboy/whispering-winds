import { useThemeColor } from '@/hooks/useThemeColor';
import { Box, BoxProps } from './Box';
import { TextType } from './TextType';
import { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, ViewProps } from 'react-native';

export type TabbarProps = {
    children: ReactNode,
};

export function Tabbar({ children, ...otherProps }: TabbarProps) {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.tabbar}>
            <TextType >
                {children}
            </TextType>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tabbar:{
        paddingHorizontal: 5,
        borderRadius: 10,
        marginHorizontal: 10
    }
})
