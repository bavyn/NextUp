import React, { useState } from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
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
    <div className='export-playlist-button'>
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
        Export Playlist to Spotify
      </Button>
      <SnackbarMessage open={open} onClose={handleClose} message='Playlist successfully exported' />
    </div>
  );
};

ExportButton.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ExportButton;
