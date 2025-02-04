import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type TextTypeProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'small' | 'smallBold' | 'link';
  header?: boolean;
  color?: string;
};

export function TextType({
  style,
  lightColor,
  darkColor,
  type = 'default',
  header = false,
  color,
  ...rest
}: TextTypeProps) {
  const selectedColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        styles.included,
        color ? { color } : { color: selectedColor },
        header ? styles.header : undefined,
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'small' ? styles.small : undefined,
        type === 'smallBold' ? styles.smallBold : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  included: {
    textAlignVertical:'center',
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 38

  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
  },
  smallBold: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
  }
});
