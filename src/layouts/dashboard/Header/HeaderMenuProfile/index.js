// Vendors
import React, { useState } from 'react';

// Qasir UI
import Menu from 'qasir-ui/navigation/Menu';
import MenuItem from 'qasir-ui/navigation/MenuItem';
import Button from 'qasir-ui/inputs/Button';
import Avatar from 'qasir-ui/data-display/Avatar';
import Typography from 'qasir-ui/data-display/Typography';
import Box from 'qasir-ui/layout/Box';

// Qasir UI Icons
import IconDropdown from 'qasir-ui/data-display/Icon/IconDropdown';

// Styles
import useStyles from './style';

const HeaderMenuProfile = () => {
  const classes = useStyles();

  // Menu Profile
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const handleClickProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  return (
    <>
      <Button
        aria-controls="menu-outlet"
        aria-haspopup="true"
        size="large"
        endIcon={<IconDropdown color="#737580" />}
        disableRipple
        onClick={handleClickProfile}
        style={{ color: '#737580' }}
      >
        <Box textAlign="right" mr="16px">
          <Typography variant="subtitle2">Boy Rakabuming</Typography>
          <Typography variant="caption" className="MuiTypography-caption2" style={{ color: '#737580' }}>
            Admin
          </Typography>
        </Box>
        <Avatar alt="https://via.placeholder.com/42" src="photo profile" sizes="42px" />
      </Button>
      <Menu
        id="menu-outlet"
        anchorEl={anchorElProfile}
        keepMounted
        open={Boolean(anchorElProfile)}
        onClose={handleCloseProfile}
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
        <MenuItem onClick={handleCloseProfile}>User Profile</MenuItem>
        <MenuItem onClick={handleCloseProfile}>Business Information</MenuItem>
        <MenuItem onClick={handleCloseProfile}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenuProfile;
