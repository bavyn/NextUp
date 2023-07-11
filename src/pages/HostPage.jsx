import React from 'react';
import '../styles/HostPage.css';
import SideMenu from '../components/SideMenu';
import { useParams } from 'react-router-dom';

const HostPage = () => {
  const { userId } = useParams();
  return (
    <div className='host-page'>
      <header className='host-page-header'>
        <h1>{`Host Page: ${userId}`}</h1>
      </header>
      <SideMenu />
    </div>
  );
};

export default HostPage;
