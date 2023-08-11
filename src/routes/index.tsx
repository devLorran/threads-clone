import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tabs.routes";
import * as SplashScreen from "expo-splash-screen";

import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from "@expo-google-fonts/inter";

import React from "react";

const Routes = () => {
    let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    });

    React.useEffect(() => {
        async function prepare() {
        await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);
    
    const onLayoutRootView = React.useCallback(async () => {
        if (fontsLoaded) {
        await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) return null;

    return(
        <NavigationContainer onReady={onLayoutRootView}>
            <TabRoutes />
        </NavigationContainer>
    )
}

export default Routes;