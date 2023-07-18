import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import '../styles/QRModal.css';
import QRCodeDisplay from './QRCodeDisplay';
import CopyToClipboardButton from './CopyToClipboardButton';
import DownloadQRButton from './DownloadQRButton';

const QRCodeModal = ({ open, onClose, userId }) => {
  const handleClose = () => {
    onClose();
  };

  const userPageLink = `https://nextup.rocks/event/${userId}`;

  return (
    <div className='qrcode-modal'>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Box textAlign='center' className='qrcode-modal-header'>
            <Typography variant='h6'>
              Share with friends to get started! <br />
            </Typography>
          </Box>
        </DialogTitle>
        <div className='qrcode-modal-copy-button'>
          <CopyToClipboardButton link={userPageLink} />
        </div>
        <DialogContent className='qrcode-modal-share-qrcode'>
          <DownloadQRButton />
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
