import { FC } from "react";
import { Box } from "./Box";
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import { TextType } from "./TextType";
import { useThemeColor } from '@/hooks/useThemeColor';

export type CardProps = ViewProps & {
    image?: string,
    imgSource?: ImageSourcePropType,
    title: string,
    desc?: string,
}

const defaultImage = require('../assets/images/icon.png')


export const Card: FC<CardProps> = ({ style, image, imgSource, title, desc, ...rest }) => {
    const imageSource = image ? { uri: image } : imgSource || defaultImage;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[style, styles.card]}
        >
            <Image
                source={imageSource}
                resizeMode="cover"
                style={styles.image}
            />
            <TextType style={styles.subtitle} type="defaultSemiBold">{title}</TextType>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        width: 150,
        height: 200,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal:4
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    subtitle: {
        color: 'white',
        paddingHorizontal: 5,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        textAlign: 'center',
    }
});

