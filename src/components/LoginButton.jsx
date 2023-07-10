import React from 'react';
import '../styles/LoginButton.css';
import Button from '@mui/material/Button';

const LoginButton = () => {
  return (
    <div>
      <a href='https://api.nextup.rocks/login'>
        <Button variant='contained'>Login</Button>
      </a>
      {/* create a check and in the check add the link tag to the hosts page
      if the status code 200, redirect. */}
    </div>
  );
};

export default LoginButton;

// Create a check if return status 200, redirect to hostpage.or link to /hosts

// Create a check if return status 200, redirect to hostpage.
//     <Link href='/hosts'>
//<Button variant='contained'>Login</Button>
//</Link>
//import { Link } from '@mui/material';
