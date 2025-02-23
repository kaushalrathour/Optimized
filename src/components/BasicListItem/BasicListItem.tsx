import { useMemo } from "react";
import { createStyles } from "./styles";
import { ThemeState } from "../../types/SliceTypes";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";

import { Comment } from "../../types/Comment";


export default function BasicListItem({ body, email, name }: Comment) {
    const { colors, isDarkMode }: ThemeState = useSelector((state: any) => state.theme);
    const styles = useMemo(() => {
        return createStyles(colors);
    }, [colors, isDarkMode]);

    return (
        <View style={styles.container}>
            <Text style={styles.textBody}>{body}</Text>
            <Text style={styles.textName}>{name}</Text>
            <Text style={styles.textEmail}>{email}</Text>
        </View>
    );
}