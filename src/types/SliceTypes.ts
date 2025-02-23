import { ColorPalette } from "./Colors";

export interface ColorPalette {
    // Backgrounds
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    
    // Text
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    
    // Status
    success: string;
    error: string;
    warning: string;
    info: string;
    
    // Borders
    borderPrimary: string;
    borderSecondary: string;
    
    // Icons
    iconPrimary: string;
    iconSecondary: string;
    
    // Shadows
    shadowColor: string;
    
    // Accents
    accentPrimary: string;
    accentSecondary: string;
  }
  
export interface ThemeState {
    isDarkMode: boolean;
    colors: ColorPalette
}

