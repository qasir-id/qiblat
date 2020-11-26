// Vendor packages
import React from 'react';

// Next
import Head from 'next/head';
import Link from 'next/link';

// Material UI
import Button from '@material-ui/core/Button';

// Components
import Error from '@/error/index';

const Error502 = () => (
  <>
    <Head>
      <title>Error 502 - Bad Gateway</title>
    </Head>
    <Error>
      <img src="/img/errors/500.svg" alt="Bad Gateway" />
      <p>Bad Gateway</p>
      <Link href="/">
        <Button>Kembali ke Dashboard</Button>
      </Link>
    </Error>
  </>
);

export default Error502;
