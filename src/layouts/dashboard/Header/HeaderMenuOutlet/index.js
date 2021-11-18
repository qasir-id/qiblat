// Vendors
import React, { useState } from 'react';

// Qasir UI
import Menu from 'qasir-ui/navigation/Menu';
import MenuItem from 'qasir-ui/navigation/MenuItem';
import Button from 'qasir-ui/inputs/Button';

// Qasir UI Icons
import IconOutlet from 'qasir-ui/data-display/Icon/IconOutlet';
import IconDropdown from 'qasir-ui/data-display/Icon/IconDropdown';

// Styles
import useStyles from './style';

const HeaderMenuOutlet = () => {
  const classes = useStyles();

  // Menu Outlets
  const [anchorElOutlet, setAnchorElOutlet] = useState(null);
  const handleClickOutlet = (event) => {
    setAnchorElOutlet(event.currentTarget);
  };
  const handleCloseOutlet = () => {
    setAnchorElOutlet(null);
  };

  return (
    <div>
      <Button
        aria-controls="menu-outlet"
        aria-haspopup="true"
        size="large"
        startIcon={<IconOutlet color="#737580" />}
        endIcon={<IconDropdown color="#737580" />}
        disableRipple
        onClick={handleClickOutlet}
      >
        All Outlet
      </Button>
      <Menu
        id="menu-outlet"
        anchorEl={anchorElOutlet}
        keepMounted
        open={Boolean(anchorElOutlet)}
        onClose={handleCloseOutlet}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ horizontal: 'left' }}
        PaperProps={{
          style: {
            minWidth: 190,
            padding: 0,
            boxShadow: 'none',
            marginTop: 5,
            border: '1px solid #eef0f2',
          },
        }}
        MenuListProps={{
          style: {
            padding: 0,
          },
        }}
      >
        <MenuItem onClick={handleCloseOutlet}>Outlet 1</MenuItem>
        <MenuItem onClick={handleCloseOutlet}>Outlet 2</MenuItem>
        <MenuItem onClick={handleCloseOutlet}>Outlet 3</MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderMenuOutlet;
