import React from 'react';

// Next
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Qasir UI
const Error = dynamic(() => import('qasir-ui/data-display/Error'), { ssr: false });

// Styles
const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Error500 = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Error 500 - Internal Server Error</title>
      </Head>
      <div className={classes.root}>
        <Error variant="500" />
      </div>
    </>
  );
};

export default Error500;
