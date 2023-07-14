import { React, useEffect, useState } from 'react';
import '../styles/UserPage.css';
import UserNavBar from '../components/UserNavBar';

import SongSearch from '../components/SongSearch';
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import musicAnimation from '../lotties/music.json';
import axios from 'axios';
import { ListItemText } from '@mui/material';

const UserPage = () => {
  const { userId } = useParams();
  // const [playlist, setPlaylist] = useState([]);
  const [nowPlaying, setNowPlaying] = useState({});
  const [playing, setPlaying] = useState(false);
  const [playingArtist, setPlayingArtist] = useState('');
  const [playingAlbum, setPlayingAlbum] = useState('');

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`https://api.nextup.rocks/events/${userId}/playlist`);
        const { currentlyPlaying } = response.data;
        // setPlaylist(playlist.queue);
        setNowPlaying(currentlyPlaying);

        if (!currentlyPlaying.artists) {
          setPlaying(false);
        }
        if (currentlyPlaying && currentlyPlaying.artists && currentlyPlaying.artists.length > 0) {
          setPlaying(true);
          setPlayingArtist(currentlyPlaying.artists[0].name);
        }

        if (currentlyPlaying && currentlyPlaying.artists && currentlyPlaying.artists.length > 0) {
          setPlayingAlbum(currentlyPlaying.album.name);
        }
      } catch (error) {
        console.error('Failed to fetch playlist:', error);
      }
    };
    fetchPlaylist();
    const intervalId = setInterval(fetchPlaylist, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='user-page'>
      <header className='user-page-header'>
        <UserNavBar userId={userId} />
      </header>
      <div className='user-page-body'>
        <div className='user-page-search-bar'>
          <SongSearch userId={userId} />
        </div>
      </div>
      <div className='now-playing-container'>
        <div className='now-playing'>
          <h2 style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            Now Playing
            <div style={{ marginLeft: '10px' }}>
              <Lottie
                animationData={musicAnimation}
                style={{ width: '35px', height: '35px' }} // You forgot to mention the height
                setSpeed={playing ? 0 : 20}
              />
            </div>
          </h2>

          <div className='user-page-song-details'>
            <ListItemText
              primary={nowPlaying?.name || 'Unknown Track'}
              secondary={`${playingArtist || 'Unknown Artist'} - ${playingAlbum || 'Unknown Album'
                }`}
            />
          </div>
        </div>
      </div>
      <footer className='footer'>
        <p>&copy; 2023 NextUp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserPage;
