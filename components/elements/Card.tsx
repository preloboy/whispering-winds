import { Children, FC, ReactNode } from "react";
import { Box } from "./Box";
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import { TextType } from "./TextType";
import { useThemeColor } from '@/hooks/useThemeColor';

export type CardProps = ViewProps & {
    children?: ReactNode,
    image?: string,
    imgSource?: ImageSourcePropType,
    desc?: string,
    landscape?: boolean,
    portrait?: boolean,
}

const defaultImage = require('../../assets/images/icon.png')

export const Card: FC<CardProps> = ({ style, image, imgSource, children, landscape, portrait }) => {
    const imageSource = image ? { uri: image } : imgSource || defaultImage;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[
                style,
                styles.card,
                landscape && styles.landscape,
                portrait && styles.portrait,
            ]}
        >
            <Image
                source={imageSource}
                resizeMode="cover"
                style={[
                    landscape && styles.imageL,
                    portrait && styles.imageP,
                ]}
            />
            <Box style={styles.box}>{children}</Box>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        overflow: 'hidden',
        marginLeft: 10,
    },
    landscape: {
        width: 270,
        height: '100%',
    },
    portrait: {
        width: 180,
        height: '100%',
    },
    imageL: {
        width: '100%',
        height: 100,
    },
    imageP: {
        width: '100%',
        height: 150,
    },

    box: {
        width: '100%',
        opacity: 0.7,
        paddingVertical: 10,
        flexGrow: 1
    }
});

