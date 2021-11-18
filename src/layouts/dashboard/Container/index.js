// Vendors
import React from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

// Qasir UI
import Container from 'qasir-ui/layout/Container';

// Layout Components
import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';
// import Footer from '../Footer';

// Styles
import useStylesContainer from './style';

export default (props) => {
  const { children } = props;
  const classes = useStylesContainer();
  const handleFullscreen = useFullScreenHandle();
  return (
    <FullScreen handle={handleFullscreen}>
      <Container disableGutters maxWidth={false} component="section" className={classes.root}>
        <Header
          fullscreenActive={handleFullscreen.active}
          fullscreenEnter={handleFullscreen.enter}
          fullscreenExit={handleFullscreen.exit}
        />
        <Sidebar />
        <Content>{children}</Content>
        {/* <Footer /> */}
      </Container>
    </FullScreen>
  );
};
