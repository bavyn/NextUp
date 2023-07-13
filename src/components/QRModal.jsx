import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import PropTypes from 'prop-types';
import QRCodeDisplay from './QRCodeDisplay';
import { Link } from 'react-router-dom';

const QRCodeModal = ({ open, onClose, value, userId }) => {
  const handleClose = () => {
    onClose();
  };

  console.log('link: ', userId);

  return (
    <div className='qrcode-modal'>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '24px',
            fontFamily: 'Abril Fatface, serif',
          }}
        >
          Share with friends to get started!{' '}
        </DialogTitle>
        <DialogContent>
          Click <Link to={`/event/${userId}`}>here</Link> to share a link with your friends
        </DialogContent>
        <DialogContent>Click here to share your QR code with your friends</DialogContent>
        <DialogContent>
          <QRCodeDisplay value={value} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

QRCodeModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default QRCodeModal;
