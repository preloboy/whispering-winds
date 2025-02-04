import { Children, FC, ReactNode } from "react";
import { Box } from "./Box";
import { Image, ImageProps, ImageSourcePropType, StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import { TextType } from "./TextType";
import { useThemeColor } from '@/hooks/useThemeColor';

export type ImageViewProps = ImageProps & {
    image?: string,
    imgSource?: ImageSourcePropType,
    type: 'round' | 'portrait' | 'landscape',
}

const defaultImage = require('../../assets/images/icon.png')


export const ImageView: FC<ImageViewProps> = ({ style, image, imgSource, type, ...rest }) => {
    const imageSource = image ? { uri: image } : imgSource || defaultImage;

    return (
        <Image
            source={imageSource}
            resizeMode="cover"
            style={[
                style, styles.default,
                type === 'round' && styles.round,
                type === 'portrait' && styles.portrait,
                type === 'landscape' && styles.landscape
            ]}
            {...rest}
        />
    )
}

const styles = StyleSheet.create({
    default:{  
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 10
    },
    round: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    portrait: {
        width: 100,
        height: 150,
    },
    landscape: {
        width: 270,
        height: 150,
    }
});

