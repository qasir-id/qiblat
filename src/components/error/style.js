// Vendors
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: '32%',
      marginBottom: 10,
      [theme.breakpoints.down('sm')]: {
        width: '50%',
      },
    },
    '& h3': {
      color: '#f04b32',
    },
    '& p': {
      padding: '15px 35px',
      marginBottom: 30,
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: 16,
      },
    },
  },
}));
