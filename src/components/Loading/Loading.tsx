import {StyleSheet, View, Image} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../Container/Container';
import { createStyles } from './styles';
import { ThemeState } from '../../types/ThemeState';

export default function LoadingScreen() {
  const {colors, isDarkMode }: ThemeState = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  const [indicatoryVisible, setIndicatoryVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndicatoryVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const styles = useMemo(()=>{
          return createStyles(colors)
      },[colors,isDarkMode])
  return (
    <Container>
    <View style={styles.container}>
      {/* <Image source={Logo} style={styles.logo} /> */}
      {indicatoryVisible && (
        <ActivityIndicator
          animating={true}
          color={colors.iconPrimary}
        />
      )}
    </View>
    </Container>
  );
}

