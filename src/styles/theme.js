export const theme = {
  colors: {
    secondary: '#302e53',
    primary: '#d07017',
    text: '#1e2022',
    background: '#ffffff',
    border: '#E0E0E0',
    error: '#DE4848',
    warning: '#DEBD48',
    success: '#48DE84',
  },

  gradients: {
    fadeToBlack:
      'linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0) 100%)',
  },

  shadows: {
    mediumShadow: 'box-shadow: 0px 4px 14px rgba(132, 201, 250, 0.07);',
  },
};

export const muiTheme = {
  palette: {
    primary: { main: theme.colors.orange },
    light: { main: theme.colors.white },
    dark: { main: theme.colors.dark },
    grey: { main: '#B6B6B6', light: '#DEDBDB', alt: '#ABB2CC' },
    success: {
      main: '#48DE84',
    },
    warning: {
      main: '#DEBD48',
    },
    error: {
      main: '#DE4848',
    },
  },

  overrides: {
    MuiMenu: {
      paper: {
        boxShadow: '0px 1px 7px -2px rgb(0, 0, 0, 0.13)',
      },
    },
  },
};
