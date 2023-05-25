export const Fonts = [
  'Inter',
  'sans-serif'
].join(',')

export const Typography = {
  fontFamily: Fonts,
  h1: {
    fontWeight: 900,
    fontSize: 96
  },
  h2: {
    fontWeight: 700,
    fontSize: 64
  },
  h3: {
    fontWeight: 700,
    fontSize: 40
  },
  h4: {
    fontWeight: 700,
    fontSize: 32
  },
  h5: {
    fontWeight: 700,
    fontSize: 24
  },
  h6: {
    fontWeight: 700,
    fontSize: 18
  },
  subtitle1: {
    fontWeight: 700,
    fontSize: 16
  },
  subtitle2: {
    fontWeight: 700,
    fontSize: 14
  },
  body1: {
    fontWeight: 400,
    fontSize: 16
  },
  body2: {
    fontWeight: 400,
    fontSize: 14
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'subtitle1': React.CSSProperties
    'subtitle2': React.CSSProperties
    'body1': React.CSSProperties
    'body2': React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    ['subtitle1']?: React.CSSProperties
    ['subtitle2']?: React.CSSProperties
    ['body1']?: React.CSSProperties
    ['body2']?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'subtitle1': true
    'subtitle2': true
    'body1': true
    'body2': true
  }
}
