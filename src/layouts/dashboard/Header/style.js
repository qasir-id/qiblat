// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Styles
import { sidebarWidth } from '../Sidebar/style';

export const headerHeight = 96;

const useStylesHeader = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#F2F4F7',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  appBarShift: {
    width: `calc(100% - ${sidebarWidth}px)`,
    marginLeft: sidebarWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    minHeight: headerHeight,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 15,
      paddingRight: 15,
      minHeight: 74,
    },
  },
  logo: {
    height: 42,
    minWidth: 215,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
      height: 24,
      '& img': {
        height: 24,
      },
    },
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
    [theme.breakpoints.down('sm')]: {
      flexGrow: 'unset',
    },
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
  navbarCenter: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
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
