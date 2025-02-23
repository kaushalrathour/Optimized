import { ScaledSheet as StyleSheet } from "react-native-size-matters";
import { ColorPalette } from "../../types/SliceTypes";

export const createStyles = (colors: ColorPalette) => (
    StyleSheet.create({
        container: {
            backgroundColor: colors.backgroundSecondary,
            borderRadius: 10,
            padding: '10@s', // Scaled padding
            marginVertical: '5@s', // Scaled vertical margin
            shadowColor: colors.shadowColor,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 2, // For Android shadow
        },
        textBody: {
            fontSize: '14@s', // Scaled font size
            color: colors.textPrimary,
            marginBottom: '5@s', // Scaled margin
        },
        textName: {
            fontSize: '16@s', // Scaled font size
            fontWeight: 'bold',
            color: colors.accentPrimary,
        },
        textEmail: {
            fontSize: '12@s', // Scaled font size
            color: colors.textSecondary,
        },
    })
);
