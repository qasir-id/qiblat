// Vendor packages
import React from 'react';

// Next
import Head from 'next/head';
import Link from 'next/link';

// Material UI
import Button from '@material-ui/core/Button';

// Components
import Error from '@/error/index';

const Error504 = () => (
  <>
    <Head>
      <title>Error 504 - Gateway Timeout</title>
    </Head>
    <Error>
      <img src="/img/errors/500.svg" alt="Gateway Timeout" />
      <p>Gateway Timeout</p>
      <Link href="/">
        <Button>Kembali ke Dashboard</Button>
      </Link>
    </Error>
  </>
);

export default Error504;
