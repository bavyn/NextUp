import React from 'react';
import logo from './images/NextUpLogo.png';
import './App.css';

import LoginButton from './routes/LoginButton';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <LoginButton />
      </header>
    </div>
  );
}

export default App;
