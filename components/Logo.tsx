import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"

export type LogoProps = {
    name: keyof typeof Ionicons.glyphMap,
    size: number,
    lightColor?: string,
    darkColor?: string,
}

export const Logo: FC<LogoProps> = ({ name, size, lightColor, darkColor, ...rest }) => {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');
    return (
        <Ionicons name={name} size={size} color={color} />

    )
}