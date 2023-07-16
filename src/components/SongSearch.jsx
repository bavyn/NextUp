import { React, useRef, useState, useEffect } from 'react';
import '../styles/UserNavBar.css';
import PropTypes from 'prop-types';
import {
  List,
  TextField,
  ListItem,
  ListItemAvatar,
  Snackbar,
  SnackbarContent,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../styles/SongSearch.css';

import axios from 'axios';

const SongSearch = ({ userId, playlist, host }) => {
  const searchResultsRef = useRef();
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isListVisible, setListVisible] = useState(false);
  const [clickedSongId, setClickedSongId] = useState(null);
  const [clickedSongName, setClickedSongName] = useState('');
  const [open, setOpen] = useState(false);
  const [isSongInPlaylist, setIsSongInPlaylist] = useState(false);

  useEffect(() => {
    if (searchInput.length > 0) {
      axios
        .get(`https://api.nextup.rocks/events/${userId}/search/${searchInput}`)
        .then((res) => {
          const songs = res.data;
          console.log(songs.tracks);
          setSearchResults(songs.tracks);
          setListVisible(true);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setSearchResults([]);
      setListVisible(false);
    }
  }, [searchInput]);

  const handleClose = () => {
    setOpen(false);
  };

  const postSong = async (songId) => {
    const response = await axios.post(`https://api.nextup.rocks/events/${userId}/songs`, {
      songID: songId,
    });

    console.log(response.data);
  };

  const setOpenAndReset = (openState, delay = 1000) => {
    setOpen(openState);
    setTimeout(() => {
      setOpen(false);
      if (openState) {
        setClickedSongId(null);
      }
    }, delay);
  };

  const handleAddSong = async (songId) => {
    try {
      const song = searchResults.find((song) => song.id === songId);
      const songExistsInPlaylist = playlist.some((plSong) => plSong.trackId === songId);

      if (!host) {
        setIsSongInPlaylist(songExistsInPlaylist);
      }

      if (song) {
        setClickedSongId(songId);
        setClickedSongName(song.name);

        if (host || !songExistsInPlaylist) {
          await postSong(songId);
        }

        setOpenAndReset(true);
      } else if (songExistsInPlaylist) {
        setClickedSongName(song.name);
        setOpenAndReset(true);
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  const searchResultsStyle = {
    overflowY: 'auto',
    marginTop: '5px',
    transition: 'max-height 0.3s ease',
    maxHeight: isListVisible ? '200px' : '0',
    width: '22em',
    ...(isListVisible && {
      border: '1px solid #b3d8ff',
      borderRadius: '5px',
    }),
  };

  const scrollbarStyle = `
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  `;

  return (
    <div style={{ position: 'relative' }}>
      <TextField
        label='Add a song'
        variant='outlined'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{ width: '22em' }}
      />

      <div ref={searchResultsRef} style={searchResultsStyle} className='search-results-container'>
        <style>{scrollbarStyle}</style>
        <List>
          {searchResults.map((song) => (
            <ListItem
              className={`list-item ${clickedSongId === song.id ? 'clicked-song' : ''}`}
              key={song.id}
              onClick={() => handleAddSong(song.id)}
            >
              <ListItemAvatar>
                <AddCircleIcon />
              </ListItemAvatar>
              <div>
                <div>{song.name}</div>
                <div style={{ paddingTop: '5px', fontSize: '0.8em', color: 'gray' }}>
                  {song.artists[0].name}
                </div>
              </div>
            </ListItem>
          ))}
        </List>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <SnackbarContent
            message={
              isSongInPlaylist
                ? `Song ${clickedSongName} is already in the queue`
                : `Added ${clickedSongName} to queue`
            }
            sx={{
              backgroundColor: isSongInPlaylist ? 'red' : 'green',
            }}
          />
        </Snackbar>
      </div>
    </div>
  );
};

SongSearch.propTypes = {
  userId: PropTypes.string.isRequired,
  playlist: PropTypes.array.isRequired,
  host: PropTypes.bool.isRequired,
};

export default SongSearch;
