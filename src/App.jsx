import { React, useState, useEffect } from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar';

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
      <div className='name-header'>
        <header>
          <h1>NextUp</h1>
        </header>
        <section className='app-description'>
          <h2>Your Melody. Your World</h2>
          <p>{sayings[sayingIndex]}</p>
        </section>
        <footer>
          <p>&copy; 2023 NextUp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
