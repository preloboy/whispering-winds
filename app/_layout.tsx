import { Stack } from "expo-router";
import "./global.css";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect } from "react";


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}
