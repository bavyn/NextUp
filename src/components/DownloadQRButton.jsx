import React, { useState } from 'react';
import { Button } from '@mui/material';
import SnackbarMessage from './SnackbarMessage';

const DownloadQRButton = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const downloadQR = () => {
    const canvas = document.getElementById('qrcode-canvas');
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'nextup_qr_code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={downloadQR}>Download QR Code</Button>
      <SnackbarMessage
        open={open}
        onClose={handleClose}
        message='Your NextUp QR code has been downloaded'
      />
    </div>
  );
};

export default DownloadQRButton;
