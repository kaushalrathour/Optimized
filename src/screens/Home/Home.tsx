import React, { useMemo } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import Container from "../../components/Container/Container";
import { createStyles } from "./styles";
import { useSelector } from "react-redux";
import { ThemeState } from "../../types/SliceTypes";
import ButtonCard from "../../components/ButtonCard/ButtonCard"
import { HomeScreenProp, StackParamList } from "../../types/StackParamList";

type BUTTONS_DATA = {
    id: string,
    title: string,
    navigateTo: keyof StackParamList,
}

const BUTTONS_DATA : BUTTONS_DATA[] = [
    { id: '1', title: 'Basic FlatList', navigateTo: "BasicList" },
    { id: '2', title: 'Optimized FlatList', navigateTo: "OptimizedList" },
    { id: '3', title: 'Advanced FlatList', navigateTo: "AdvancedList" },
    { id: '4', title: 'Horizontal FlatList', navigateTo: "HorizontalList" },
    { id: '5', title: 'Vertical FlatList', navigateTo: "VerticalList" },
];


export default function HomeScreen({navigation}: HomeScreenProp): React.JSX.Element {
    const { colors, isDarkMode }: ThemeState = useSelector((state: any) => state.theme);
    const styles = useMemo(() => {
        return createStyles(colors);
    }, [colors, isDarkMode]);

    const renderButton = ( {item} ) => (
        <ButtonCard title={item.title} navigateTo={item.navigateTo}/>
    );

    return (
        <Container>
            <View style={styles.container}>
                <FlatList
                    data={BUTTONS_DATA}
                    renderItem={renderButton}
                    keyExtractor={item => item.id}
                />
            </View>
        </Container>
    );
}
