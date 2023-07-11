import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import '../styles/SideMenu.css';
import logo from '../images/NextUpLogo.png';

const SideMenu = () => {
  return (
    <div className='side-menu'>
      <Drawer className='drawer' variant='permanent' classes={{ paper: 'drawerPaper' }}>
        <div className='toolbar' />
        <img src={logo} className='side-menu-logo' alt='logo' />
        <List>
          <ListItem>
            <ListItemText primary='Placeholder 1' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Placeholder 2' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Placeholder 3' />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideMenu;
