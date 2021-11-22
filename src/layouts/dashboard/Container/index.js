// Vendors
import React from 'react';
import { connect } from 'react-redux';
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

const Layout = (props) => {
  const { children, stateLayout } = props;
  const { sidebarOpen } = stateLayout.dashboard;
  const classes = useStylesContainer();
  const handleFullscreen = useFullScreenHandle();
  return (
    <FullScreen handle={handleFullscreen}>
      <Container
        disableGutters
        maxWidth={false}
        component="section"
        className={classes.root}
        style={{ overflow: sidebarOpen ? 'hidden' : 'auto' }}
      >
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

const mapStateToProps = ({ layout }) => ({
  stateLayout: layout,
});

export default connect(mapStateToProps)(Layout);
