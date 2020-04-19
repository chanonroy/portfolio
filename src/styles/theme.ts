const theme = {
  colors: {
    primary: 'mediumseagreen',
    black: '#384047',
    softGrey: '#999',
  },
  breakpoints: {
    xs: 500,
    sm: 768,
    md: 992,
    lg: 1200,
  },
  spacing: {
    xs: 20,
    sm: 40,
    md: 80,
  },
  shadows: {
    z1: '0 2px 2px 0 rgba(0,0,0,.15)',
  },
  transition: {
    normal: 'all 0.3s ease',
  },
};

export type CustomTheme = typeof theme;

export default theme;
