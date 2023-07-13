import { React, useState } from 'react';
import '../styles/TopNavBar.css';
import logo from '../images/NextUpLogo.png';
import LoginButton from './LoginButton';
import InfoIcon from '@mui/icons-material/Info';
import AboutUsModal from './AboutUsModal';

const TopNavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleInfoIconClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className='top'>
      <div className='nav-items'>
        <img src={logo} className='logo' alt='logo' />
        <LoginButton />
      </div>
      <div className='center'>
        <InfoIcon onClick={handleInfoIconClick} />
      </div>
      <AboutUsModal open={modalOpen} onClose={handleCloseModal} />
    </nav>
  );
};

export default TopNavBar;
