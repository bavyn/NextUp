import { React, useRef, useState, useEffect } from 'react';
import '../styles/UserNavBar.css';
import PropTypes from 'prop-types';
import { List, TextField, ListItem, ListItemAvatar } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import axios from 'axios';

const SongSearch = ({ userId }) => {
  const searchResultsRef = useRef();
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchInput.length > 0) {
      axios
        .get(`https://api.nextup.rocks/events/${userId}/search/${searchInput}`)
        .then((res) => {
          const songs = res.data;
          console.log(songs.tracks);
          setSearchResults(songs.tracks);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchResultsRef, setSearchResults]);

  const handleAddSong = async (songId) => {
    try {
      const response = await axios.post(`https://api.nextup.rocks/events/${userId}/songs`, {
        songID: songId,
      });
      console.log(response.data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <TextField
        label='Search'
        variant='outlined'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{ width: '400px' }}
      />
      <div
        ref={searchResultsRef}
        style={{
          position: 'absolute',
          width: '100%',
          maxHeight: '200px',
          overflow: 'auto',
          backgroundColor: '#fff',
          zIndex: 1,
          display: searchInput.length > 0 && searchResults.length > 0 ? 'block' : 'none',
        }}
      >
        <List>
          {searchResults.map((song) => (
            <ListItem key={song.id}>
              <div>
                <div>{song.name}</div>
                <div style={{ paddingLeft: '20px' }}>{song.artists[0].name}</div>
              </div>
              <div>
                <ListItemAvatar>
                  <PlayCircleIcon onClick={() => handleAddSong(song.id)} />
                </ListItemAvatar>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

SongSearch.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default SongSearch;
