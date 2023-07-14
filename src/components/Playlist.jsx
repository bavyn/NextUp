
import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

const Playlist = ({ playlist, handleDeleteClick }) => {
  Playlist.propTypes = {
    playlist: PropTypes.array.isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
  };

  return (
    <div className='host-page-playlist'>
      <h2>Your Playlist</h2>
      <List>
        {playlist.map((item) => {
          const track = item?.Track;
          const artist = track?.Artist?.name;
          const album = track?.Album?.name;
          return (
            <ListItem key={item.id} className='host-page-song-item'>
              <div className='host-page-song-details'>
                <ListItemText
                  primary={track?.name || 'Unknown Track'}
                  secondary={`${artist || 'Unknown Artist'} - ${album || 'Unknown Album'}`}
                  style={{ textAlign: 'center' }}
                />
              </div>
              <div className='host-page-avatars'>
                <ListItemAvatar>
                  <Avatar>
                    <DeleteIcon onClick={() => handleDeleteClick(item.id)} />
                  </Avatar>
                </ListItemAvatar>
              </div>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Playlist;

