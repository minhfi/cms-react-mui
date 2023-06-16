import { toCssVariables } from './mui-theme'

// colors mapping
export const Colors = {
  black: '#000',
  white: '#fff',

  primary: {
    100: '#CBE6FE',
    200: '#8FD7F6',
    300: '#4DA7D2',
    400: '#338DC0',
    500: '#1A73AB',
    600: '#005993',
    700: '#004E83',
    800: '#004472',
    900: '#003961',
    1000: '#062A46'
  },

  green: {
    100: '#A6F984',
    200: '#91F173',
    300: '#7EE764',
    400: '#6BDA57',
    500: '#5ACB4C',
    600: '#4CB944',
    700: '#41A43A',
    800: '#368E30',
    900: '#2C7826',
    1000: '#22611E'
  },

  red: {
    100: '#FFE6E8',
    200: '#FFB8C2',
    300: '#FF8A9F',
    400: '#FF5C7F',
    500: '#EE2E63',
    600: '#EE2E63',
    700: '#C31143',
    800: '#AF103D',
    900: '#9B0F36',
    1000: '#870E30'
  },

  'gray/light': {
    100: '#FFFFFF',
    200: '#F4F8FB',
    300: '#F2F6F9',
    400: '#EAF3FD',
    500: '#C9D9EA',
    600: '#9EB3C9',
    700: '#8294A2',
    800: '#697F90',
    900: '#4B6477',
    1000: '#000000'
  },

  // not implemented
  'gray/dark': {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: ''
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: Record<keyof ReturnType<typeof toCssVariables>, string>
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: Record<keyof ReturnType<typeof toCssVariables>, string>
  }
}
