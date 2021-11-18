// Vendors
import React from 'react';

// Qasir UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from 'qasir-ui/inputs/IconButton';
import Hidden from 'qasir-ui/layout/Hidden';

// Qasir UI Icons
import IconExpand from 'qasir-ui/data-display/Icon/IconExpand';

// Components
import HeaderMenuOutlet from './HeaderMenuOutlet';
import HeaderMenuProfile from './HeaderMenuProfile';

// Styles
import useStylesHeader from './style';

const Header = (props) => {
  const { fullscreenActive, fullscreenEnter, fullscreenExit } = props;
  const classes = useStylesHeader();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar className={classes.toolbar}>
          <Hidden smDown>
            <div className={classes.logo}>
              <a href="#">
                <img src="/img/logo/logo-text.svg" alt="logo qasir" />
              </a>
            </div>
          </Hidden>
          <div className={classes.navbarLeft}>
            <IconButton onClick={fullscreenActive ? fullscreenExit : fullscreenEnter}>
              <IconExpand />
            </IconButton>
            <HeaderMenuOutlet />
          </div>
          <div className={classes.navbarRight}>
            <HeaderMenuProfile />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
