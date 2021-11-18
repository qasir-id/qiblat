// Vendors
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Material UI
import withWidth from '@material-ui/core/withWidth';

// Qasir UI
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from 'qasir-ui/utils/transitions/Collapse';
import IconDashboard from 'qasir-ui/data-display/Icon/IconDashboard';
import IconDropdown from 'qasir-ui/data-display/Icon/IconDropdown';

// Styles
import useStylesSidebar from './style';

const Sidebar = (props) => {
  const { width, stateLayout } = props;
  const { sidebarOpen } = stateLayout.dashboard;

  const classes = useStylesSidebar();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant={width == 'xs' || width == 'sm' ? 'persistent' : 'permanent'}
      classes={{
        paper: classes.drawerPaper,
      }}
      open={sidebarOpen}
    >
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <IconDashboard />
            </ListItemIcon>
            <ListItemText primary="Single Menu" />
          </ListItem>
          <ListItem button selected>
            <ListItemIcon>
              <IconDashboard />
            </ListItemIcon>
            <ListItemText primary="Single Menu Selected" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <IconDashboard />
            </ListItemIcon>
            <ListItemText primary="Multi Menu" />
            <IconDropdown />
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Child Multi Menu" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </Drawer>
  );
};

const mapStateToProps = ({ layout }) => ({
  stateLayout: layout,
});

export default connect(mapStateToProps)(withWidth()(Sidebar));
