// Vendors
import { makeStyles } from '@material-ui/core/styles';

// Qasir UI
import colors from 'qasir-ui/variables/colors';

// Layouts
import { headerHeight } from '@/layout/dashboard/Header/style';

export const sidebarWidth = 240;

const useStylesSidebar = makeStyles((theme) => ({
  drawer: {
    width: sidebarWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: sidebarWidth,
    top: `${headerHeight}px !important`,
    backgroundColor: '#F2F4F7',
    border: 'none',
    transition: 'none',
    '&.MuiDrawer-paperAnchorDockedLeft': {
      border: 'none',
    },
    '& .MuiListItem-root': {
      marginBottom: 8,
      paddingTop: 15,
      paddingBottom: 15,
      '& .MuiSvgIcon-root': {
        color: colors.black30,
      },
    },
    '& .MuiCollapse-root': {
      '& .MuiListItem-root': {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 28,
        marginBottom: 0,
      },
      '& .Mui-selected': {
        '&:before': {
          display: 'none',
        },
      },
    },
    '& .MuiListItemText-primary': {
      color: colors.black30,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '17px',
      fontStyle: 'normal',
      fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
      textTransform: 'capitalize',
    },
    '& .MuiListItemIcon-root': {
      minWidth: 35,
      '&:last-child': {
        marginBottom: 0,
      },
    },
    '& .MuiListItem-gutters': {
      paddingLeft: 24,
      paddingRight: 24,
    },
    '& .MuiSvgIcon-root': {
      color: colors.black90,
    },
    '& .Mui-selected': {
      backgroundColor: '#F2F4F7',
      '&:before': {
        content: '""',
        display: 'block',
        borderRight: `8px solid ${colors.red50}`,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
      },
      '& .MuiListItemText-primary': {
        color: colors.black90,
      },
      '& .MuiListItemIcon-root': {
        '& .MuiSvgIcon-root': {
          color: colors.black90,
        },
      },
      '& .MuiListItemText-root': {
        '& + .MuiSvgIcon-root': {
          color: colors.black90,
        },
      },
    },
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

export default useStylesSidebar;
