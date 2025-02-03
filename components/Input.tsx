import { useThemeColor } from "@/hooks/useThemeColor";
import { FC } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export type InputProps = TextInputProps&{
    placeholder: string;
    onChangeText: (text: string) => void;
    lightColor?: string;
    darkColor?:string;
}

export const Input:FC<InputProps> =({style, placeholder, onChangeText, lightColor, darkColor}) =>{
    // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
return(
    <TextInput 
    placeholder={placeholder} 
    onChangeText={onChangeText} 
    style={[
        {backgroundColor}, 
        style,
        styles.input
        
    ]}
    />
)
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius:10
    },
})