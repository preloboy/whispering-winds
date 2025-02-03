import { ScrollView, StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReactNode } from 'react';

export type ContainerProps = ViewProps & {
    children?: ReactNode;
    lightColor?: string;
    darkColor?: string;
};

export function Container({ children, style, lightColor, darkColor, ...otherProps }: ContainerProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <SafeAreaView style={[{ backgroundColor }, style, styles.default]} {...otherProps} >
                {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    default: {
        paddingHorizontal: 20,
        paddingVertical: 20
    }
});
