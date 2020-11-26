export const buttonStyled = ({ theme }) => ({
  root: {
    height: 36,
    textTransform: 'unset',
    fontSize: 12,
    borderRadius: 4,
    '& img': {
      marginRight: 9,
      width: 20,
    },
    '& .MuiButton-label, span': {
      fontWeight: 600,
    },
  },

  sizeSmall: {
    height: 28,
    fontSize: 12,
  },
  sizeLarge: {
    height: 48,
    fontSize: 14,
  },

  contained: {
    boxShadow: 'none',
    '&:hover,&:focus': {
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: '#DADCE5',
      color: '#ffffff',
    },
  },
  containedPrimary: {
    '&:hover': {
      backgroundColor: '#D8442D',
    },
  },
  containedSecondary: {
    color: '#474955',
    '&:hover': {
      backgroundColor: '#DCDDDF',
    },
  },

  outlined: {
    border: '1px solid #DADCE5',
    color: '#474955',
    '&:hover': {
      borderColor: theme,
      color: theme,
      backgroundColor: '#ffffff',
    },
  },
});
