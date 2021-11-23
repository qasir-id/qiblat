// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Layouts
import { headerHeight } from '@/layout/dashboard/Header/style';
import { sidebarWidth } from '@/layout/dashboard/Sidebar/style';

export const contentNavPageHeight = 110;

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
    marginLeft: sidebarWidth,
    marginRight: `-${sidebarWidth}px`,
  },
  navPage: {
    zIndex: 1,
    backgroundColor: '#F2F4F7',
    position: 'fixed',
    top: headerHeight,
    left: sidebarWidth,
    right: 0,
    minHeight: contentNavPageHeight,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #eef0f2',
    [theme.breakpoints.down('sm')]: {
      top: 74,
      left: 0,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    '& > div': {
      backgroundColor: '#ffffff',
      minHeight: contentNavPageHeight,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexGrow: 1,
      paddingLeft: 24,
      paddingRight: 24,
      borderRadius: '24px 0 0 0',
      [theme.breakpoints.down('sm')]: {
        borderRadius: 0,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      '& .MuiTypography-h3': {
        fontSize: 20,
      },
    },
  },
  navPageShift: {
    marginLeft: sidebarWidth,
    marginRight: `-${sidebarWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '& > div': {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
}));

export default useStylesContent;
