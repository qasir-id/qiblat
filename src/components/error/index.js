// Next
import Head from 'next/head';

// Styles
import { WrapperError } from './style';

export default ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/img/icons/favicon.ico" />
      </Head>
      <WrapperError>{children}</WrapperError>
    </>
  );
};
