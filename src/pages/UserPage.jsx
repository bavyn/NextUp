import { React, useEffect, useState } from 'react';
import '../styles/UserPage.css';
import UserNavBar from '../components/UserNavBar';
import SongSearch from '../components/SongSearch';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NowPlaying from '../components/NowPlaying';
import Playlist from '../components/Playlist';

const UserPage = () => {
  const { userId } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [nowPlaying, setNowPlaying] = useState({});
  const [playing, setPlaying] = useState(false);
  const [playingArtist, setPlayingArtist] = useState('');
  const [playingAlbum, setPlayingAlbum] = useState('');

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`https://api.nextup.rocks/events/${userId}/playlist`);
        const { playlist, currentlyPlaying } = response.data;
        setPlaylist(playlist.queue);
        setNowPlaying(currentlyPlaying);

        if (!currentlyPlaying.artists) {
          setPlaying(false);
        }
        if (currentlyPlaying && currentlyPlaying.artist) {
          setPlaying(true);
          setPlayingArtist(currentlyPlaying.artist.name);
        }

        if (currentlyPlaying && currentlyPlaying.album) {
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

  const showControls = false;

  return (
    <div className='user-page'>
      <header className='user-page-header'>
        <UserNavBar userId={userId} />
        <h1>Welcome to {userId}&rsquo;s party!</h1>
      </header>
      <section className='user-page-body'>
        <SongSearch userId={userId} />
        <NowPlaying
          nowPlaying={nowPlaying}
          playing={playing}
          playingArtist={playingArtist}
          playingAlbum={playingAlbum}
          showControls={showControls}
        />
        <Playlist playlist={playlist} showControls={showControls} />
      </section>
      <footer className='footer'>
        <p>&copy; 2023 NextUp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserPage;
