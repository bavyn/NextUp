import { React, useState, useEffect } from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar';
import Lottie from 'lottie-react';
import djAnimation from './lotties/dj.json'

const sayings = [
  'Unite through Music',
  'Create Memorable Moments',
  'A Playlist for You and Your Friends',
  'Elevate Your Party Experience',
];

function App() {
  const [sayingIndex, setSayingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSayingIndex((prevIndex) => (prevIndex + 1) % sayings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <TopNavBar />
      <div className='center-content'>
        <header className='name-header'>
          <h1 className='next-up-header'>NextUp</h1>
        </header>
        <section className='app-description'>
          <h2>Your Melody. Your World</h2>
          <p>{sayings[sayingIndex]}</p>
          <Lottie animationData={djAnimation} style={{ maxWidth: '80%', maxHeight: '60%', alignItems: 'center', justifyContent: 'center', display: 'flex', margin: '0 auto' }} />
        </section>
      </div>
      <footer className='footer'>
        <p>&copy; 2023 NextUp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
