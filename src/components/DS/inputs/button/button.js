// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import ButtonMui from '@material-ui/core/Button';

// Styles
import theme from '@/override/material-ui/theme';

const Button = (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <ButtonMui {...props}>{children}</ButtonMui>
    </ThemeProvider>
  );
};

export default Button;
