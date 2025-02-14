import { StyleSheet } from "react-native"
import { Box } from "./elements/Box"
import { Input } from "./elements/Input"
import { TextType } from "./elements/TextType"
import { Container } from "./elements/Container"

export type InputEditableProps = {
    children: React.ReactNode,
    editing: boolean,
    onchangeText: (text: string) => void,
    placeHolder: string,
}

export const InputEditable = ({ children, editing, onchangeText, placeHolder }: InputEditableProps) => {
    if (!children) return null;
    return (
        <Container style={styles.inputBox}>
            {editing ?
                <Input placeholder={placeHolder} onChangeText={onchangeText} style={{width:'100%', paddingVertical:10}}/>
                : <TextType style={{paddingVertical:10}}>{children} </TextType>
            }
        </Container>
        
    )
}

const styles = StyleSheet.create({
    inputBox: {
        // marginHorizontal: 15,
        // marginTop: 10,
        // marginBottom:5,
        borderRadius: 5,
        // paddingLeft: 10
        // width:'100%'
    },
})