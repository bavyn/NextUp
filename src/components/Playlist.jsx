import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import '../styles/Playlist.css';

const Playlist = ({ playlist, handleDeleteClick, showControls }) => {
  Playlist.propTypes = {
    playlist: PropTypes.array.isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
    showControls: PropTypes.bool.isRequired,
  };

  return (
    <div className='playlist'>
      <h2 className='playlist-header'>Your Playlist</h2>
      <div className='playlist-content'>
        <List>
          {playlist.map((item) => {
            const track = item?.Track;
            const artist = track?.Artist?.name;
            const album = track?.Album?.name;
            return (
              <ListItem key={item.id} className='playlist-song-item'>
                <div className='playlist-song-details'>
                  <ListItemText
                    primary={track?.name || 'Unknown Track'}
                    secondary={`${artist || 'Unknown Artist'} - ${album || 'Unknown Album'}`}
                    style={{ textAlign: 'center' }}
                  />
                </div>
                {showControls && (
                  <div className='playlist-avatars'>
                    <ListItemAvatar>
                      <Avatar>
                        <DeleteIcon onClick={() => handleDeleteClick(item.id)} />
                      </Avatar>
                    </ListItemAvatar>
                  </div>
                )}
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default Playlist;
