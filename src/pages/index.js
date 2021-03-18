// Vendors
import React from 'react';

// Next
import Head from 'next/head';

// Material UI
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Qasir UI
import Typography from 'qasir-ui/data-display/Typography';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    // color: theme.primary.main,
  },
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Welcome - {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <Container className={classes.wrapper}>
        <div>
          <h1 className={classes.title}>Qasir Boilerplate</h1>
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>

          <div className="grid">
            <a href="https://fe-qasir.gitbook.io/qiblat-documentation/" className="card" target="_blank">
              <h3>Learn &rarr;</h3>
              <p>Learn about Qasir react boilerplate structure.</p>
            </a>
          </div>
          <a href="https://www.qasir.id/" target="_blank" rel="noopener noreferrer">
            Powered by <img src="/img/logo/qasir.svg" alt="Qasir Logo" className="logo" />
          </a>
        </div>
      </Container>
    </>
  );
};

export default Welcome;
