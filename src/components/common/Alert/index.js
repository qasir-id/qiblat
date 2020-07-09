import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function AlertEl(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alert({ handleClose, open, message }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <AlertEl onClose={handleClose} severity="error">
          <span style={{ textTransform: 'capitalize' }}>{message}</span>
        </AlertEl>
      </Snackbar>
    </div>
  );
}
