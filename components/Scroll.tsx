import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native';

import { ReactNode } from 'react';

export type ScrollProps = ScrollViewProps & {
    horizontal?: boolean;
    children?: ReactNode;
};

export function Scroll({ children, horizontal, ...otherProps }: ScrollProps) {

    return (
        <ScrollView 
        horizontal={horizontal}  
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ flexGrow: 1 }}
        {...otherProps} 
        >
            {children}
        </ScrollView>
    );
}
