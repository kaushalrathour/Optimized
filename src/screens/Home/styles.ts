import {ScaledSheet as StyleSheet} from "react-native-size-matters"
import { ColorPalette } from "../../types/SliceTypes";
export const createStyles = (colors: ColorPalette) => (
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            backgroundColor: colors.backgroundPrimary,
        },
        
    })
);
