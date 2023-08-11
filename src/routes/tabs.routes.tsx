import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { dark } from "../themes/dark";
import {Image} from "react-native"
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import NewPost from "../screens/NewPost";
import Activity from "../screens/Activity";

const TabRoutes = () => {
    const AppTab = createBottomTabNavigator();

    return (
        <AppTab.Navigator screenOptions={{headerShown:false, tabBarStyle:{
            backgroundColor: dark.colors.background,
            paddingTop: 16,
            borderTopWidth: 0,
        },
        title: ''
        }}>
            <AppTab.Screen options={{
                tabBarIcon: ({focused}) => focused ? (
                    <Image source={require("../assets/images/tab/home_focused.png")} />
                ) : (
                    <Image source={require("../assets/images/tab/home.png")} />
                    ),
            }} name="Home" component={Home} />
            <AppTab.Screen options={{
                tabBarIcon: ({focused}) => focused ? (
                    <Image source={require("../assets/images/tab/search_focused.png")} />
                ) : (
                    <Image source={require("../assets/images/tab/search.png")} />
                    ),
            }} name="Search" component={Search} />

            <AppTab.Screen options={{
                tabBarIcon: () => <NewPost /> }} name="NewThread" component={NewPost} />

            <AppTab.Screen options={{
                tabBarIcon: ({focused}) => focused ? (
                    <Image source={require("../assets/images/tab/activity_focused.png")} />
                ) : 
                (<Image source={require("../assets/images/tab/activity.png")} />), }} name="Activities" component={Activity} />

            <AppTab.Screen options={{
                tabBarIcon: ({focused}) => focused ? (
                    <Image source={require("../assets/images/tab/profile_focused.png")} />
                ) : 
                (<Image source={require("../assets/images/tab/profile.png")} />), }} name="Profile" component={Profile} />

        </AppTab.Navigator>
    )
}

export default TabRoutes;