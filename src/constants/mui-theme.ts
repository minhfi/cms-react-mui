import { Colors } from './mui-colors'
import { ThemeOptions } from '@mui/material'
import { Typography } from './mui-typography'

export enum EPaletteMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface IThemeProps {
  paletteMode?: EPaletteMode
  [key: string]: any
}

export const validThemeMode = (mode?: EPaletteMode): EPaletteMode => mode && [EPaletteMode.LIGHT, EPaletteMode.DARK].includes(mode)
  ? mode
  : EPaletteMode.LIGHT

export const toCssVariables = (mode?: EPaletteMode) => {
  const paletteMode = validThemeMode(mode)
  return {
    '--color-white': Colors.white,
    '--color-black': Colors.black,
    '--color-primary-100': Colors.primary[100],
    '--color-primary-200': Colors.primary[200],
    '--color-primary-300': Colors.primary[300],
    '--color-primary-400': Colors.primary[400],
    '--color-primary-500': Colors.primary[500],
    '--color-primary-600': Colors.primary[600],
    '--color-primary-700': Colors.primary[700],
    '--color-primary-800': Colors.primary[800],
    '--color-primary-900': Colors.primary[900],
    '--color-primary-1000': Colors.primary[1000],

    '--color-green-100': Colors.green[100],
    '--color-green-200': Colors.green[200],
    '--color-green-300': Colors.green[300],
    '--color-green-400': Colors.green[400],
    '--color-green-500': Colors.green[500],
    '--color-green-600': Colors.green[600],
    '--color-green-700': Colors.green[700],
    '--color-green-800': Colors.green[800],
    '--color-green-900': Colors.green[900],
    '--color-green-1000': Colors.green[1000],

    '--color-red-100': Colors.red[100],
    '--color-red-200': Colors.red[200],
    '--color-red-300': Colors.red[300],
    '--color-red-400': Colors.red[400],
    '--color-red-500': Colors.red[500],
    '--color-red-600': Colors.red[600],
    '--color-red-700': Colors.red[700],
    '--color-red-800': Colors.red[800],
    '--color-red-900': Colors.red[900],
    '--color-red-1000': Colors.red[1000],

    '--color-gray-100': Colors[`gray/${paletteMode}`][100],
    '--color-gray-200': Colors[`gray/${paletteMode}`][200],
    '--color-gray-300': Colors[`gray/${paletteMode}`][300],
    '--color-gray-400': Colors[`gray/${paletteMode}`][400],
    '--color-gray-500': Colors[`gray/${paletteMode}`][500],
    '--color-gray-600': Colors[`gray/${paletteMode}`][600],
    '--color-gray-700': Colors[`gray/${paletteMode}`][700],
    '--color-gray-800': Colors[`gray/${paletteMode}`][800],
    '--color-gray-900': Colors[`gray/${paletteMode}`][900]
  }
}

export const genThemeWithPaletteMode = (paletteMode: EPaletteMode): ThemeOptions & { colors: Record<keyof ReturnType<typeof toCssVariables>, string> } => ({
  colors: toCssVariables(paletteMode),
  palette: {
    mode: EPaletteMode.LIGHT, /** paletteMode */
    primary: {
      main: toCssVariables(paletteMode)['--color-primary-600']
    },
    text: {
      primary: toCssVariables(paletteMode)['--color-black']
    }
  },
  typography: Typography,
  spacing: 8
})

export type TTheme = ReturnType<typeof genThemeWithPaletteMode>
