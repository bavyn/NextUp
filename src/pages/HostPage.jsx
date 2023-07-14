import { React, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/HostPage.css';
import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
// import QRCodeDisplay from '../components/QRCodeDisplay';
import HostNavBar from '../components/HostNavBar';
import QRCodeModal from '../components/QRModal';
import Lottie from 'lottie-react';
import musicAnimation from '../lotties/music.json';
import SongSearch from '../components/SongSearch';

const HostPage = () => {
  const { userId } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [nowPlaying, setNowPlaying] = useState({});
  const [playing, setPlaying] = useState(false);
  const [playingArtist, setPlayingArtist] = useState('');
  const [playingAlbum, setPlayingAlbum] = useState('');
  const [playColour, setPlayColour] = useState('clicked');
  const [pauseColour, setPauseColour] = useState('');
  const [qrcodeModalOpen, setQRCodeModalOpen] = useState(false);

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

  const handlePlayClick = async () => {
    try {
      const response = await axios.get(`https://api.nextup.rocks/events/${userId}/resume`);
      console.log(response.data);
      setPlayColour('clicked');
      setPauseColour('');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  const handlePauseClick = async () => {
    try {
      const response = await axios.get(`https://api.nextup.rocks/events/${userId}/pause`);
      console.log(response.data);
      setPauseColour('clicked');
      setPlayColour('');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  const handleDeleteClick = async (songId) => {
    try {
      const response = await axios.delete(
        `https://api.nextup.rocks/events/${userId}/songs/${songId}`,
      );
      console.log(response.data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  const handlePartyClick = async () => {
    try {
      const response = await axios.get(`https://api.nextup.rocks/events/${userId}/start`);
      console.log(response.data);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleQRCodeModalClose = () => {
    setQRCodeModalOpen(false);
  };

  return (
    <div className='host-page'>
      <header className='host-page-header'>
        <HostNavBar userId={userId} />
        <h1>{`Welcome ${userId}`}</h1>
      </header>
      <QRCodeModal
        open={qrcodeModalOpen}
        onClose={handleQRCodeModalClose}
        value={`https://nextup.rocks/event/${userId}`}
        userId={userId}
      />
      <section className='host-page-content'>
        <SongSearch userId={userId} />
        <div className='host-page-start-party'>
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
        </div>
        <div className='host-page-now-playing'>
          <h2>
            Now Playing
            <div className='host-page-now-playing-animation'>
              <Lottie animationData={musicAnimation} setSpeed={playing ? 0 : 20} />
            </div>
          </h2>
          <div className='host-page-song-details'>
            <ListItemText
              primary={nowPlaying?.name || 'Unknown Track'}
              secondary={`${playingArtist || 'Unknown Artist'} - ${
                playingAlbum || 'Unknown Album'
              }`}
              style={{ textAlign: 'center' }}
            />
          </div>
          <div className='host-page-avatars'>
            <ListItemAvatar>
              <Avatar className={playColour === 'clicked' ? 'playing' : ''}>
                <PlayCircleIcon onClick={handlePlayClick} />
              </Avatar>
            </ListItemAvatar>
            <ListItemAvatar>
              <Avatar className={pauseColour === 'clicked' ? 'paused' : ''}>
                <PauseCircleIcon onClick={handlePauseClick} />
              </Avatar>
            </ListItemAvatar>
          </div>
        </div>
        <h2>Your Playlist</h2>
        <div className='host-page-playlist'>
          <List>
            {playlist &&
              playlist.map((item) => {
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
      </section>
      <footer className='footer'>
        <p>&copy; 2023 NextUp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HostPage;
