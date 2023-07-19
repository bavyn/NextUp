import React, { useState } from 'react';
import { Button, Snackbar, SnackbarContent } from '@mui/material';
import axios from 'axios';

const StartPartyButton = ({ userId, playlist, selectedDevice }) => {
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('Party has started');
  const [toastColour, setToastColour] = useState('green');

  const handleClose = () => {
    setOpen(false);
  };

  const handlePartyClick = async () => {
    console.log('userid', userId);
    console.log('selectedDevice', selectedDevice);
    if (!playlist || playlist.length === 0) {
      setToastMessage(
        'No songs in your playlist. Please add some songs before starting the party.',
      );
      setToastColour('red');
      setOpen(true);
    } else {
      try {
        const response = await axios.get(
          `https://api.nextup.rocks/events/${userId}/start?deviceId=${selectedDevice}`,
        );
        console.log(response.data);
        setToastMessage(
          'Party has started! If you cannot hear your music, make sure that you do not have another device running spotify.',
        );
        setToastColour('green');
        setOpen(true);
      } catch (error) {
        setToastMessage(
          'There was an issue starting your party. Please close your Spotify client and reopen it. If this does not work, please start a song in your client and then press the "Start the party" button again.',
        );
        setToastColour('red');
        setOpen(true);
        console.error('Error occurred:', error);
      }
    }
  };

  return (
    <div>
      <Button
        variant='contained'
        sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
        onClick={handlePartyClick}
      >
        Start the party
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <SnackbarContent
          message={toastMessage}
          sx={{
            backgroundColor: toastColour,
          }}
        />
      </Snackbar>
    </div>
  );
};

export default StartPartyButton;
