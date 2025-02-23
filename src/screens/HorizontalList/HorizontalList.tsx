import React, { useMemo } from 'react'
import { Text, View } from 'react-native'
import { HorizontalListScreenProp } from '../../types/StackParamList'
import axios from "axios"
import Container from '../../components/Container/Container'
import { ThemeState } from '../../types/SliceTypes'
import { useSelector } from 'react-redux'
import { createStyles } from './styles'

export default function HorizontalListScreen ({navigation}: HorizontalListScreenProp) {
  const { colors, isDarkMode }: ThemeState = useSelector((state: any) => state.theme);
  const styles = useMemo(() => {
      return createStyles(colors);
  }, [colors, isDarkMode]);
    return (
        <Container>
      <View>
        <Text> textInComponent </Text>
      </View>
      </Container>
    )
  }


