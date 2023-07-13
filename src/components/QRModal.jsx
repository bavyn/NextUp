import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import PropTypes from 'prop-types';
import '../styles/QRModal.css';
import QRCodeDisplay from './QRCodeDisplay';
import CopyToClipboardButton from './CopyToClipboardButton';

const QRCodeModal = ({ open, onClose, userId }) => {
  const handleClose = () => {
    onClose();
  };

  const userPageLink = `https://nextup.rocks/event/${userId}`;

  const downloadQR = () => {
    const canvas = document.getElementById('qrcode-canvas');
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'nextup_qr_code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className='qrcode-modal'>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <h4 className='qrcode-modal-header'>Share with friends to get started!</h4>
        </DialogTitle>
        <div className='qrcode-modal-copy-button'>
          <CopyToClipboardButton link={userPageLink} />
        </div>
        {/* <div className='qrcode-modal-share-qrcode-link'>
          <p>Click here to share your QR code</p>
        </div> */}
        <DialogContent className='qrcode-modal-share-qrcode'>
          <Button onClick={downloadQR}>Download QR Code</Button>
          <QRCodeDisplay value={userPageLink} canvasId='qrcode-canvas' />
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
  userId: PropTypes.string.isRequired,
};

export default QRCodeModal;
