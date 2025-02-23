import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer as Navigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home/Home";
import LoadingScreen from "./components/Loading/Loading"
import { useDispatch, useSelector } from 'react-redux';
import { StackParamList } from "./types/StackParamList";
import { ThemeState } from "./types/SliceTypes";
import BasicListScreen from "./screens/BasicList/BasicList";
import OptimizedListScreen from "./screens/OptimizedList/OptimizedList";
import AdvancedListScreen from "./screens/AdvancedList/AdvancedList";
import HorizontalListScreen from "./screens/HorizontalList/HorizontalList";
import VerticalListScreen from "./screens/VerticalList/VerticalList";

const Stack = createStackNavigator<StackParamList>();
const { Screen, Navigator } = Stack;

const options = {
    headerShown: false,
}

export default function NavigationContainer() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {colors, isDarkMode }: ThemeState = useSelector((state: any) => state.theme);
    const [initialRoute, setInitialRoute] = useState<keyof StackParamList>('Home');
    const dispatch = useDispatch();


    if (isLoading) {
        return <LoadingScreen />;
    } else {
        return (
            <Navigation>
                <StatusBar backgroundColor={colors.backgroundPrimary}/>
                <Navigator initialRouteName={initialRoute}>
                    <Screen name="Home" component={HomeScreen} options={options} />
                    <Screen name="BasicList" component={BasicListScreen} options={options} />
                    <Screen name="OptimizedList" component={OptimizedListScreen} options={options} />
                    <Screen name="AdvancedList" component={AdvancedListScreen} options={options} />
                    <Screen name="HorizontalList" component={HorizontalListScreen} options={options} />
                    <Screen name="VerticalList" component={VerticalListScreen} options={options} />
                </Navigator>
            </Navigation>
        );
    }
}
