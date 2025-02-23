import React, { useMemo } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { createStyles } from './styles';
import { ThemeState } from '../../types/SliceTypes';

type Prop = {
    children: React.JSX.Element
}
export default function Container({ children }: Prop) {
    const {colors, isDarkMode }: ThemeState = useSelector((state: any) => state.theme);
    const styles = useMemo(()=>{
        return createStyles(colors)
    },[colors,isDarkMode]);
    return (
        <View style={styles.container}>
            <Toast/>
            {children}
        </View>
    );
}

