// Next
import Head from 'next/head';
import Link from 'next/link';

// Material UI
import Button from '@material-ui/core/Button';

// Components
import Error from '@/error/index';

const Error404 = () => (
  <>
    <Head>
      <title>Error 404 - Page Not Found</title>
    </Head>
    <Error>
      <img src="/img/errors/404.svg" alt="not found" />
      <p>Halaman yang dicari dicari tidak ada, silahkan cek lagi</p>
      <Link href="/">
        <Button>Kembali ke Dashboard</Button>
      </Link>
    </Error>
  </>
);

export default Error404;
