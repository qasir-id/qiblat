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
    marginRight: 18,
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default useStylesHeader;
