// Vendors
import React from 'react';

// Qasir UI
import Button from 'qasir-ui/inputs/Button';

// Styles
import ButtonStyled from './style';

const Button = () => {
  const classes = ButtonStyled();
  return <Button className={classes.root}>Hello World</Button>;
};

export default Button;
