import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import SnackbarMessage from './SnackbarMessage';

const ExportButton = ({ userId }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const exportPlaylist = async () => {
    try {
      const response = await axios.post(`https://api.nextup.rocks/events/${userId}/export`);
      console.log(response.data);
      setOpen(true);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <div className='export-button'>
      <Button
        onClick={exportPlaylist}
        variant='contained'
        sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        Export
      </Button>
      <SnackbarMessage open={open} onClose={handleClose} message='Playlist successfully exported' />
    </div>
  );
};

export default ExportButton;
