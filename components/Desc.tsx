import { FC, ReactNode } from "react";
import { Text, TextProps } from "react-native";

export type DescProps = TextProps & {
    children: ReactNode
}

const Desc: FC<DescProps> = ({ children, ...rest }) => {
    return (
        <Text
            className="desc"
            {...rest}
        >
            {children}
        </Text>
    )
}

export default Desc
