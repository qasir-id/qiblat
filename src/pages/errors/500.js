// Vendor packages
import React from 'react';

// Next
import Head from 'next/head';
import Link from 'next/link';

// Material UI
import Button from '@material-ui/core/Button';

// Components
import Error from '@/error/index';

const Error500 = () => (
  <>
    <Head>
      <title>Error 500 - Internal Server Error</title>
    </Head>
    <Error>
      <img src="/img/errors/500.svg" alt="internal server error" />
      <p>Internal Server Error</p>
      <Link href="/">
        <Button>Kembali ke Dashboard</Button>
      </Link>
    </Error>
  </>
);

export default Error500;
