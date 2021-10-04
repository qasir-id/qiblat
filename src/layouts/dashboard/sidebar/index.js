// Vendors
import React from 'react';

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

const Sidebar = ({ children }) => {
  const classes = useStylesSidebar();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
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

export default Sidebar;
