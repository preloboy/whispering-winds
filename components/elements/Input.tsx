import { useThemeColor } from "@/hooks/useThemeColor";
import { FC, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View, Text } from "react-native";
import { TextType } from "./TextType";
import { Container } from "./Container";

export type InputProps = TextInputProps & {
    placeholder: string;
    onChangeText: (text: string) => void;
    lightColor?: string;
    darkColor?: string;
}

export const Input: FC<InputProps> = ({ style, placeholder, onChangeText, lightColor, darkColor }) => {
    const [isFocused, setIsFocused] = useState(false);
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'placeHolder');
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <Container style={styles.container}>
            <TextInput
                onFocus={() => setIsFocused(true)}
                onChangeText={onChangeText}
            style={[
                { backgroundColor, color },
                style,
                styles.input
            ]}
            />
            <TextType style={[styles.placeholder, isFocused && styles.placeholderFocused]}>
                {placeholder}
            </TextType>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
    },
    placeholder: {
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: -12 }],
    },
    placeholderFocused: {
        top: 0,
        fontSize: 12,
        transform: [{ translateY: 0 }],
    },
    input: {
        fontSize: 16,
        lineHeight: 24,
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 8,
        paddingHorizontal: 5,
    },
})