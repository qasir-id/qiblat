// Vendors
import React from 'react';

// Next
import Head from 'next/head';
import Link from 'next/link';

// Material UI
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 40,
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
        <Box flex="1 0 auto">
          <h1 className={classes.title}>Qasir Boilerplate</h1>

          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>

          <div className="grid">
            <a
              href="https://github.com/qasir-id/Qasir-React-Boilerplate/blob/master/js/dashboard/README.md"
              className="card"
              target="_blank"
            >
              <h3>Learn &rarr;</h3>
              <p>Learn about Qasir react boilerplate structure.</p>
            </a>

            <Link href="/auth/login">
              <a className="card">
                <h3>Examples &rarr;</h3>
                <p>Discover layout dashboard with components.</p>
              </a>
            </Link>
          </div>
        </Box>
      </Container>

      <footer>
        <a href="https://www.qasir.id/" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/img/logo/qasir.svg" alt="Qasir Logo" className="logo" />
        </a>
      </footer>
    </>
  );
};

export default Welcome;
