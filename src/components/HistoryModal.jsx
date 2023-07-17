import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';
import axios from 'axios';
import ExportPlaylistButton from '../components/ExportPlaylistButton';

const HistoryModal = ({ open, onClose, userId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nextup.rocks/events/${userId}/history`)
      .then((response) => {
        setHistory(response.data.history);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className='history-modal'>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          <h4 className='history-modal-header' style={{ justifyContent: 'center', alignItems: 'center' }}>View history</h4>
        </DialogTitle>

        <DialogContent>
          {history.length === 0 ? (
            <Typography>No songs played during the event.</Typography>
          ) : (
            <List>
              {history.map((song) => (
                <ListItem key={song.id}>
                  <ListItemText
                    primary={song.Track?.name || 'Unknown Track'}
                    secondary={`${song.Track.Artist.name || 'Unknown Artist'} - ${song.Track.Album.name || 'Unknown Album'
                      }`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <ExportPlaylistButton userId={userId} />
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

HistoryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default HistoryModal;
