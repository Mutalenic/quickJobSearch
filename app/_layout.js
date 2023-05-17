import { Stack } from "expo-router";
import { useCallback } from "react";
import *as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout =() => {
    const onlayoutRootVieew = useCallback(async()=> {
        
    },[])
    return <Stack onlayout = {onlayoutRootVieew} />;    
}

export default Layout;