import { useThemeColor } from '@/hooks/useThemeColor';
import { Box, BoxProps } from './Box';
import { TextType } from './TextType';
import { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, ViewProps } from 'react-native';

export type TabbarProps = {
    children: ReactNode,
};

export function Tabbar({ children }: TabbarProps) {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.tabbar}>
            <TextType style={{paddingRight:5}}>
                {children}
            </TextType>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tabbar:{
        borderRadius: 10,
        paddingVertical:5,
    }
})
