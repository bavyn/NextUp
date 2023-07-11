import React from 'react';
import '../styles/HostPage.css';
import SideMenu from '../components/SideMenu';

const HostPage = () => {
  return (
    <div className='host-page'>
      <header className='host-page-header'>
        <h1>Host Page</h1>
      </header>
      <SideMenu />
    </div>
  );
};

export default HostPage;
