import React from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <div className='App'>
      <TopNavBar />
      <div className='about-us-header'>
        <header>
          <h1>NextUp</h1>
        </header>
        <section>
          <h2>Your Melody. Your World</h2>
          <p>Unite through Music, Create Memorable Moments</p>
        </section>

        <footer>
          <p>&copy; 2023 NextUp. All rights reserved.</p>
        </footer>
      </div>

    </div>
  );
}

export default App;
