import { ScaledSheet as StyleSheet } from "react-native-size-matters";
import { ColorPalette } from "../../types/SliceTypes";

export const createStyles = (colors: ColorPalette) => (
    StyleSheet.create({
        button: {
            backgroundColor: colors.warning,
            padding: "16@vs",
            borderRadius: "8@vs",
            marginVertical: "8@vs",
            alignItems: "center",
            justifyContent: "center",
            elevation: 5,
            shadowColor: colors.shadowColor,
            shadowOffset: { width: 0, height: "4@vs" },
            shadowOpacity: 0.4,
            shadowRadius: "6@vs",
            borderWidth: "2@vs",
            borderColor: colors.accentPrimary,
            transform: [{ scale: 1 }],
            transition: 'background-color 0.3s ease',
        },
        buttonPressed: {
            backgroundColor: colors.accentPrimary,
            elevation: 2,
            transform: [{ scale: 0.95 }],
        },
        buttonText: {
            color: colors.textPrimary,
            fontSize: "18@vs",
            fontWeight: "700",
            letterSpacing: "1@vs",
            textTransform: 'uppercase',
        },
        buttonTextPressed: {
            color: colors.textSecondary,
        },
    })
);
