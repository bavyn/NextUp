import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import PropTypes from 'prop-types';
import '../styles/QRModal.css';
import QRCodeDisplay from './QRCodeDisplay';
import CopyToClipboardButton from './CopyToClipboardButton';

const QRCodeModal = ({ open, onClose, value, userId }) => {
  const handleClose = () => {
    onClose();
  };

  const userPageLink = `https://nextup.rocks/event/${userId}`;

  return (
    <div className='qrcode-modal'>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <h4 className='qrcode-modal-header'>Share with friends to get started!</h4>
        </DialogTitle>
        <div className='qrcode-modal-copy-button'>
          <CopyToClipboardButton link={userPageLink} />
        </div>
        <div className='qrcode-modal-share-qrcode'>
          <p>Click here to share your QR code</p>
        </div>
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
