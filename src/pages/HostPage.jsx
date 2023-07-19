import { React, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/HostPage.css';
import { useParams } from 'react-router-dom';
import NowPlaying from '../components/NowPlaying';
import Playlist from '../components/Playlist';
import HostNavBar from '../components/HostNavBar';
import QRCodeModal from '../components/QRModal';
import SongSearch from '../components/SongSearch';
// import StartThePartyButton from '../components/StartThePartyButton';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { Button } from '@mui/material';
// import PartyModal from '../components/PartyModal';
import HistoryButton from '../components/HistoryButton';
import HistoryModal from '../components/HistoryModal';
import PartyControlsModal from '../components/PartyControlsModal';
// import ExportButton from '../components/ExportPlaylistButton';

const HostPage = () => {
  const { userId } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [nowPlaying, setNowPlaying] = useState({});
  const [playing, setPlaying] = useState(false);
  const [playingArtist, setPlayingArtist] = useState('');
  const [playingAlbum, setPlayingAlbum] = useState('');
  const [playColour, setPlayColour] = useState('clicked');
  const [pauseColour, setPauseColour] = useState('');
  const [ffColour, setFFColour] = useState('');
  const [qrcodeModalOpen, setQRCodeModalOpen] = useState(false);
  const [partyModalOpen, setPartyModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`https://api.nextup.rocks/events/${userId}/playlist`);
        const { playlist, currentlyPlaying } = response.data;
        const sortedPlaylist = [...playlist.queue].sort((a, b) => a.position - b.position);
        setPlaylist(sortedPlaylist);
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

  async function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const fromIndex = result.source.index;
    const toIndex = result.destination.index;

    const items = Array.from(playlist);
    const [reorderedItem] = items.splice(fromIndex, 1);
    items.splice(toIndex, 0, reorderedItem);

    setPlaylist(items);

    try {
      const response = await fetch(`https://api.nextup.rocks/events/${userId}/playlist/reorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromIndex: fromIndex,
          toIndex: toIndex,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json.message);
    } catch (error) {
      console.error('Failed to reorder playlist', error);
    }
  }

  const handlePlayClick = async () => {
    try {
      const response = await axios.get(`https://api.nextup.rocks/events/${userId}/resume`);
      console.log(response.data);
      setPlayColour('clicked');
      setPauseColour('');
      setFFColour('');
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
      setFFColour('');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  const handleFFClick = async () => {
    try {
      await axios.get(`https://api.nextup.rocks/events/${userId}/next`);
      // set ff colour for only one second after it is clicked
      setFFColour('clicked');
      setPauseColour('');
      setPlayColour('');
      setTimeout(() => {
        setFFColour('');
        setPlayColour('clicked');
      }, 1000);
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

  const handleQRCodeModalClose = () => {
    setQRCodeModalOpen(false);
  };

  const handlePartyModalClose = () => {
    setPartyModalOpen(false);
  };

  const handleHistoryModalClose = () => {
    setHistoryModalOpen(false);
  };

  const handleOpenHistoryModal = () => {
    setHistoryModalOpen(true);
  };

  // const handleStartPartyClick = () => {
  //   setPartyModalOpen(true);
  // };

  const handleOpenPartyControlsModal = () => {
    setPartyModalOpen(true);
  };

  const showControls = true;

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
      {/* <PartyModal
        open={partyModalOpen}
        onClose={handlePartyModalClose}
        value={`https://nextup.rocks/event/${userId}`}
        playlist={playlist}
        userId={userId}
      /> */}
      <PartyControlsModal
        open={partyModalOpen}
        onClose={handlePartyModalClose}
        value={`https://nextup.rocks/event/${userId}`}
        userId={userId}
      />
      <section className='host-page-content'>
        <div className='host-page-start-party'>
          {/* <StartThePartyButton userId={userId} playlist={playlist} /> */}
          {/* <Button
            variant='contained'
            disabled={playlist.length === 0}
            sx={{
              backgroundColor: 'black',
              color: 'white',
              '&:hover': {
                backgroundColor: playlist.length === 0 ? 'black' : 'white',
                color: playlist.length === 0 ? 'white' : 'black',
              },
            }}
            onClick={handleStartPartyClick}
          >
            Start the party
          </Button> */}
          <Button
            onClick={handleOpenPartyControlsModal}
            variant='contained'
            sx={{
              backgroundColor: 'black',
              color: 'white',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
              },
            }}
          >
            Party Controls
          </Button>
        </div>
        <SongSearch userId={userId} playlist={playlist} host={true} />
        <NowPlaying
          nowPlaying={nowPlaying}
          playing={playing}
          playingArtist={playingArtist}
          playingAlbum={playingAlbum}
          playColour={playColour}
          pauseColour={pauseColour}
          ffColour={ffColour}
          handlePlayClick={handlePlayClick}
          handlePauseClick={handlePauseClick}
          handleFFClick={handleFFClick}
          showControls={showControls}
        />
        <Playlist
          playlist={playlist}
          onDragEnd={onDragEnd}
          handleDeleteClick={handleDeleteClick}
          showControls={showControls}
        />
        <HistoryButton onClick={handleOpenHistoryModal} />
        <HistoryModal
          open={historyModalOpen}
          onClose={handleHistoryModalClose}
          value={`https://nextup.rocks/event/${userId}`}
          userId={userId}
        />
        {/* <ExportButton userId={userId} /> */}
      </section>
      <ScrollToTopButton />
      <footer className='footer'>
        <p>&copy; 2023 NextUp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HostPage;
