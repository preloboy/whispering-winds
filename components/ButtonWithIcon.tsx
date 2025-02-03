import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { TextType } from "./TextType";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ButtonProps = {
    title: string,
    icon?: string,
    lightColor?: string,
    darkColor?: string,
    onPress?: () => void,
}

export const ButtonWithIcon: FC<ButtonProps> = ({ title, icon, lightColor, darkColor, onPress }) => {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <TouchableOpacity activeOpacity={0.6} style={[styles.buttonWithIcon, { backgroundColor }]}>
            <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={24} color={color} />
            <TextType type="defaultSemiBold">{title}</TextType>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWithIcon: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: 'rgba(0,0,0,0.1)',
        width: 80,
        height: 80,
        marginLeft:15
    }
});