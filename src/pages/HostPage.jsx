import React from 'react';
import '../styles/HostPage.css';
import SideMenu from '../components/SideMenu';

const HostPage = () => {
  return (
    <div className='host-page'>
      <h1 className='host-page-header'>Host Page</h1>
      <SideMenu />
    </div>
  );
};

export default HostPage;
