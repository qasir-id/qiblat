// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Layouts
import { headerHeight } from '@/layout/dashboard/header/style';
import { sidebarWidth } from '@/layout/dashboard/sidebar/style';

export const contentNavPageHeight = 70;

const useStylesContent = makeStyles((theme) => ({
  root: {
    marginTop: headerHeight,
    marginLeft: sidebarWidth,
    paddingTop: contentNavPageHeight + 24,
    padding: 24,
    backgroundColor: '#ffffff',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  navPage: {
    backgroundColor: '#F2F4F7',
    position: 'fixed',
    top: headerHeight,
    left: sidebarWidth,
    right: 0,
    minHeight: contentNavPageHeight,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    borderBottom: '1px solid #eef0f2',
    [theme.breakpoints.down('sm')]: {
      top: 74,
      left: 0,
    },
    '& > div': {
      backgroundColor: '#ffffff',
      position: 'fixed',
      top: headerHeight,
      left: sidebarWidth,
      right: 0,
      minHeight: contentNavPageHeight,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 24,
      paddingRight: 24,
      borderRadius: '24px 0 0 0',
      [theme.breakpoints.down('sm')]: {
        top: 74,
        left: 0,
        borderRadius: 0,
      },
      '& .MuiTypography-h3': {
        fontSize: 20,
      },
    },
  },
}));

export default useStylesContent;
