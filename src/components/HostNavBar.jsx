import { React, useState } from 'react';
import '../styles/HostNavBar.css';
import logo from '../images/NextUpLogo.png';
import QRCodeModal from './QRModal';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Tooltip } from '@mui/material';

const HostNavBar = ({ userId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleInfoIconClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className='top-nav-bar'>
      <img src={logo} className='logo' alt='logo' />
      <div className='qr-icon'>
        <Tooltip title='Click me!' placement='bottom' fontFamily='Abril Fatface, serif'>
          <QrCode2Icon onClick={handleInfoIconClick} style={{ fontSize: '4rem', left: 0 }} />
        </Tooltip>
        <QRCodeModal open={modalOpen} onClose={handleCloseModal} userId={userId} />
      </div>
    </nav>
  );
};

export default HostNavBar;
