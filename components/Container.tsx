import { StyleSheet, View, type ViewProps } from 'react-native';

import { ReactNode } from 'react';

export type ContainerProps = ViewProps & {
    children?: ReactNode;
};

export function Container({ children, style, ...otherProps }: ContainerProps) {

    return (
        <View style={[style, styles.default]} {...otherProps} >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        alignItems: 'center',
    },
});
