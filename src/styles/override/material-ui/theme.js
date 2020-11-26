// Vendors
import { createMuiTheme } from '@material-ui/core/styles';

// Styles
import { buttonStyled } from '@/qasir-ui/inputs/button/style';

const defaultTheme = createMuiTheme();

// A custom theme for this app
export const modifyTheme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#F04B32',
    },
    secondary: {
      main: '#DADCE5',
    },
    error: {
      main: '#F04B32',
    },
    background: {
      default: '#fff',
    },
    social: {
      wa: '#25D366',
      ig: '#DD2A7B',
      fb: '#1877F2',
      tw: '#1DA1F2',
      yt: '#FF0000',
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  },
  shape: {
    borderRadius: 4,
  },
};

const theme = createMuiTheme({
  ...modifyTheme,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#F2F4F7',
        },
      },
    },
    MuiButton: buttonStyled(modifyTheme),
  },
});

export default theme;
