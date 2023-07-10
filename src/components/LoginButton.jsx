import React from 'react';

import '../styles/LoginButton.css';
import Button from '@mui/material/Button';

const LoginButton = () => {
  return (
    <div>
      <a href='https://api.nextup.rocks/login'>
        <Button variant='contained'>Login</Button>
      </a>
    </div>
  );
};

export default LoginButton;
