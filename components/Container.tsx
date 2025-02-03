import { StyleSheet, View, type ViewProps } from 'react-native';

import { ReactNode } from 'react';

export type ContainerProps = ViewProps & {
    children?: ReactNode;
    col?: boolean,
};

export function Container({ children, style, col, ...otherProps }: ContainerProps) {

    return (
        <View
            style={[
                style,
                styles.default,
                col && styles.col
                ,
            ]}
            {...otherProps}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
        flexDirection: 'row',
    },
    col: {
        flexDirection: 'column',
    }
});
