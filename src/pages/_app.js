// Vendors
import React, { useEffect } from 'react';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';

// Next
import Head from 'next/head';
import Router from 'next/router';

// Material UI
// import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

// Theme
// import theme from '@/override/material-ui/theme';

// Configs
import { wrapper } from '@/redux/store';

// Styles
import StyleGlobal from '@/globalStyle/index';

const Noop = ({ children }) => children;

// Loading pre-rendering
Router.events.on('routeChangeStart', (url) => {
  if (process.env.NEXT_PUBLIC_APP_ENV !== 'production') console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = (props) => {
  const { Component, pageProps } = props;
  const Layout = Component.Layout || Noop;
  const store = useStore((state) => state);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Mobile Configurations */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* <meta name="GOOGLEBOT" content="index follow" /> */}
        {/* <meta name="google-site-verification" content="jGgc8PucdJuqZ2rfOb35bKBqOjkhFIJTFDWSykydy_M" /> */}

        <link rel="shortcut icon" href="/img/icons/favicon.ico" />
        {/* <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="https://www.qasir.id/images/favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://www.qasir.id/images/favicons/favicon-32x32.png"
            sizes="32x32"
          /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <ThemeProvider theme={theme}> */}

      <StyleGlobal />
      {/* <CssBaseline /> */}

      <PersistGate persistor={store.__persistor} loading={null}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>

      {/* </ThemeProvider> */}
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(App);
