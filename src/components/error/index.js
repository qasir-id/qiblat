// Next
import Head from 'next/head';

// Styles
import { useStyles } from './style';

export default ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/img/icons/favicon.ico" />
      </Head>
      <div className={classes.wrapper}>{children}</div>
    </>
  );
};
