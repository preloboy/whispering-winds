import { FC, ReactNode } from "react";
import { Text, TextProps } from "react-native";

export type TitleProps = TextProps & {
    children: ReactNode
    color?: string
}

const Title: FC<TitleProps> = ({ children, color }) => {
    return (
        <Text className="title" style={{ color: color }}>
            {children}
        </Text>
    )
}

export default Title