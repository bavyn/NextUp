import { React, useState } from 'react';
import '../styles/HostNavBar.css';
import logo from '../images/NextUpLogo.png';
import QRCodeModal from './QRModal';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

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
            <div className='nav-items'>
                <img src={logo} className='logo' alt='logo' />
            </div>
            <div className='top-right-container'>
                <Tooltip title='Click me!' placement='bottom' fontFamily='Abril Fatface, serif'>
                    <div className='qr-icon'>
                        <QrCode2Icon onClick={handleInfoIconClick} style={{ fontSize: '4rem', left: 0 }} />
                    </div>
                </Tooltip>
            </div>
            <QRCodeModal open={modalOpen} onClose={handleCloseModal} userId={userId} />
        </nav>
    );
};

HostNavBar.propTypes = {
    userId: PropTypes.string.isRequired,
};
export default HostNavBar;
