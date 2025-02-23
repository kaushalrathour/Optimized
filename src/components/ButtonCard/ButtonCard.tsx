import { useMemo } from "react";
import { createStyles } from "./styles";
import { ThemeState } from "../../types/SliceTypes";
import { useSelector } from "react-redux";
import { Text, TouchableOpacity } from "react-native";
import { ButtonCardProp } from "../../types/ButtonCardProp";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../types/StackParamList";
import { StackNavigationProp } from "@react-navigation/stack";


export default function ButtonCard({title, navigateTo}: ButtonCardProp) {
    const { colors, isDarkMode }: ThemeState = useSelector((state: any) => state.theme);
    const navigation = useNavigation<StackNavigationProp<StackParamList>>()
    const styles = useMemo(() => {
        return createStyles(colors);
    }, [colors, isDarkMode]);
    return(
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=> navigation.navigate(navigateTo)}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}