import { StyleSheet } from "react-native"
import { Box } from "./elements/Box"
import { Input } from "./elements/Input"
import { TextType } from "./elements/TextType"

export type InputEditableProps = {
    children: React.ReactNode,
    editing: boolean,
    onchangeText: (text: string) => void,
    value: string | undefined
}

export const InputEditable = ({ children, editing, onchangeText, value }: InputEditableProps) => {
    return (
        <Box style={styles.inputBox}>
            {editing ?
                <Input placeholder='Enter name to modify...' onChangeText={onchangeText} value={value} />
                : <TextType>{children} </TextType>
            }
        </Box>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        marginHorizontal: 15,
        // marginTop: 10,
        borderRadius: 7,
        // paddingVertical: 10,
        // paddingLeft: 10
    },
})