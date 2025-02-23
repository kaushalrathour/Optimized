import { createSlice } from '@reduxjs/toolkit';
import { ColorPalette, ThemeState } from '../types/SliceTypes';

const lightModeColor: ColorPalette = {
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#F8F8FF',
  backgroundTertiary: '#F5FFFA',
  
  textPrimary: '#000000',
  textSecondary: '#592720',
  textTertiary: '#8C92AC',
  
  success: '#00FF00',
  error: '#FF004F',
  warning: '#FFBF00',
  info: '#0000FF',
  
  borderPrimary: '#C19A6B',
  borderSecondary: '#8C92AC',
  
  iconPrimary: '#0000FF',
  iconSecondary: '#FF004F',
  
  shadowColor: '#8C92AC',
  
  accentPrimary: '#FF0080',
  accentSecondary: '#00FF40'
};

const darkModeColor: ColorPalette = {
  backgroundPrimary: '#000000',
  backgroundSecondary: '#111111',
  backgroundTertiary: '#3D2B1F',
  
  textPrimary: '#FFFFFF',
  textSecondary: '#C19A6B',
  textTertiary: '#8C92AC',
  
  success: '#568203',
  error: '#C21E56',
  warning: '#E09540',
  info: '#3457D5',
  
  borderPrimary: '#3B3C36',
  borderSecondary: '#592720',
  
  iconPrimary: '#FFBF00',
  iconSecondary: '#00FF40',
  
  shadowColor: '#000000',
  
  accentPrimary: '#8A2BE2',
  accentSecondary: '#FFDB58'
};

const initialState: ThemeState = {
    isDarkMode: false,
    colors: lightModeColor
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeToggle: (state) => {
            const isDarkMode = !state.isDarkMode;
            state.isDarkMode = isDarkMode;
            isDarkMode? darkModeColor: lightModeColor

        },
    },
});


export const { themeToggle } = themeSlice.actions;


export default themeSlice.reducer;
