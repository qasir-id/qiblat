// Vendors
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Components
import { colorTheme } from './components/variables';
import styleTypography from './components/data-display/typography';
import styleButton from './components/inputs/button';
import styleTextField from './components/inputs/text-field';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorTheme,
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: styleTypography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          color: colorTheme,
          textDecoration: 'none',
        },
      },
    },
    MuiButton: styleButton,
    MuiTextField: styleTextField,
  },
});

export default theme;
