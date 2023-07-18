import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import axios from 'axios';

const ExportButton = ({ userId }) => {
  // THIS DOES NOT WORK YET
  const exportPlaylist = async () => {
    try {
      const response = await axios.get(`https://api.nextup.rocks/events/${userId}/export`);
      console.log(response.data);
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
    </div>
  );
};

ExportButton.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ExportButton;
