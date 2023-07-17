import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import '../styles/Playlist.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Playlist = ({ playlist, handleDeleteClick, showControls, onDragEnd }) => {
  Playlist.propTypes = {
    playlist: PropTypes.array.isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
    showControls: PropTypes.bool.isRequired,
    onDragEnd: PropTypes.func.isRequired,
  };

  return (
    <div className={`playlist ${showControls ? 'show-controls' : ''}`}>
      <h2 className='playlist-header'>Song Queue</h2>
      <div className='playlist-content'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable'>
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
                {playlist.map((item, index) => {
                  const track = item?.Track;
                  const artist = track?.Artist?.name;
                  const album = track?.Album?.name;
                  return (
                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                      {(provided) => (
                        <ListItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`playlist-song-item ${showControls ? 'show-controls' : ''}`}
                        >
                          <div className='playlist-song-details'>
                            <ListItemText
                              primary={track?.name || 'Unknown Track'}
                              secondary={`${artist || 'Unknown Artist'} - ${
                                album || 'Unknown Album'
                              }`}
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
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Playlist;
