import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import '../styles/SideMenu.css';

const SideMenu = () => {
  return (
    <Drawer className='drawer' variant='permanent' classes={{ paper: 'drawerPaper' }}>
      <div className='toolbar' />
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
  );
};

export default SideMenu;
