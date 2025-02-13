import { Button } from "./elements/Button";
import { TextType } from "./elements/TextType";
import { StyleSheet } from "react-native";
import { Container } from "./elements/Container";

export type HeaderProps = {
    title: string,
    link?: string,
    onPress?: () => void,
}

export const Header = ({ title, link, onPress }: HeaderProps) => {
    return (
        <Container style={styles.header}>
            <TextType type='subtitle' header={true}>{title}</TextType>
            {link && <Button name={link} onPress={onPress} link />}
        </Container>
    )

}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    }
})