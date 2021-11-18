// Material UI
import { makeStyles } from '@material-ui/core/styles';

export const headerHeight = 96;

const useStylesHeader = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#F2F4F7',
    boxShadow: 'none',
  },
  toolbar: {
    minHeight: headerHeight,
  },
  logo: {
    height: 42,
    minWidth: 215,
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  navbarLeft: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& .MuiIconButton-root': {
      borderRadius: 8,
      marginRight: 10,
    },
    '& .MuiButton-root': {
      backgroundColor: '#ffffff',
      paddingLeft: 20,
      paddingRight: 20,
      '& .MuiButton-label': {
        fontWeight: 500,
        color: '#737580',
      },
    },
    '& .MuiButton-startIcon': {
      marginRight: 15,
    },
    '& .MuiButton-endIcon': {
      marginLeft: 15,
    },
  },
  navbarRight: {
    '& .MuiButton-root': {
      '&:hover': {
        backgroundColor: 'inherit !important',
      },
    },
  },
}));

export default useStylesHeader;
