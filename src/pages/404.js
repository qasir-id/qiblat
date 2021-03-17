import React from 'react';

// Next
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Qasir UI
const Error = dynamic(() => import('qasir-ui/data-display/Error'), { ssr: false });
import Button from 'qasir-ui/inputs/Button';

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

const Error404 = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Error 404 - Page Not Found</title>
      </Head>
      <div className={classes.root}>
        <Error variant="404" />
        <Link href="/">
          <Button color="primary" variant="contained">
            Kembali ke Dashboard
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Error404;
