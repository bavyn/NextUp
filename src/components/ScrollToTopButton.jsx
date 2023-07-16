import React from 'react';
import '../styles/ScrollToTopButton.css';
import { useScrollTrigger, Zoom, Fab, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const buttonClass = `scrollToTopButton ${trigger ? 'show' : ''}`;

  return (
    <Zoom in={trigger}>
      <div onClick={scrollToTop} role='presentation' className={buttonClass}>
        <Tooltip title='Scroll to top' placement='top' fontFamily='Abril Fatface, serif'>
          <Fab color='primary' size='large' aria-label='scroll to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      </div>
    </Zoom>
  );
};

export default ScrollToTopButton;
