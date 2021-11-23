// Vendors
import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';

// Qasir UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from 'qasir-ui/inputs/IconButton';
import Hidden from 'qasir-ui/layout/Hidden';

// Qasir UI Icons
import IconExpand from 'qasir-ui/data-display/Icon/IconExpand';
import IconMenu from 'qasir-ui/data-display/Icon/IconMenu';

// Components
import HeaderMenuOutlet from './HeaderMenuOutlet';
import HeaderMenuProfile from './HeaderMenuProfile';

// Actions
import { actionLayoutDashboardSidebar } from '@/store/layout/dashboard/actions';

// Styles
import useStylesHeader from './style';

const Header = (props) => {
  const { stateLayout, fullscreenActive, fullscreenEnter, fullscreenExit, actionLayoutDashboardSidebar } =
    props;
  const { sidebarOpen } = stateLayout.dashboard;
  const classes = useStylesHeader();

  const elementLogo = () => (
    <div className={classes.logo}>
      <a href="#">
        <img src="/img/logo/logo-text.svg" alt="logo qasir" />
      </a>
    </div>
  );

  // Menu mobile
  const handleMenuMobileOpen = () => {
    actionLayoutDashboardSidebar(true);
  };

  const handleMenuMobileClose = () => {
    actionLayoutDashboardSidebar(false);
  };

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: sidebarOpen,
        })}
        color="default"
      >
        <Toolbar className={classes.toolbar}>
          <Hidden smDown>{elementLogo()}</Hidden>
          <div className={classes.navbarLeft}>
            <Hidden smDown>
              <IconButton onClick={fullscreenActive ? fullscreenExit : fullscreenEnter}>
                <IconExpand />
              </IconButton>
              <HeaderMenuOutlet />
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={sidebarOpen ? handleMenuMobileClose : handleMenuMobileOpen}>
                <IconMenu />
              </IconButton>
            </Hidden>
          </div>
          <Hidden mdUp>
            <div className={classes.navbarCenter}>{elementLogo()}</div>
          </Hidden>
          <div className={classes.navbarRight}>
            <HeaderMenuProfile />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ layout }) => ({
  stateLayout: layout,
});

const mapDispatchToProps = (dispatch) => ({
  actionLayoutDashboardSidebar: (payload) => dispatch(actionLayoutDashboardSidebar(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
