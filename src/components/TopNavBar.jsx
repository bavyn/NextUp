import React from 'react';
import '../styles/TopNavBar.css';
import logo from '../images/NextUpLogo.png';
import LoginButton from './LoginButton';

const TopNavBar = () => {
  return (
    <nav className='top-nav-bar'>
      <img src={logo} className='logo' alt='logo' />
      <LoginButton />
    </nav>
  );
};

export default TopNavBar;
