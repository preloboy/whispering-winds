import { Children, FC, ReactNode } from "react";
import { Box } from "./Box";
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import { TextType } from "./TextType";
import { useThemeColor } from '@/hooks/useThemeColor';

export type CardWithDetailsProps = ViewProps & {
    children?: ReactNode,
    image?: string,
    imgSource?: ImageSourcePropType,
    desc?: string,
}

const defaultImage = require('../assets/images/icon.png')


export const CardWithDetails: FC<CardWithDetailsProps> = ({ style, image, imgSource, children, desc, ...rest }) => {
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
            <Box style={styles.box}>{children}</Box>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 180,
        height: '100%',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: 10,
    },
    image: {
        width: '100%',
        height: 100,
    },

    box: {
        width: '100%',
        opacity: 0.7,
        paddingVertical: 10,
        flexGrow: 1
    }
});

