import { React } from 'react';
import '../styles/UserNavBar.css';
import logo from '../images/NextUpLogo.png';
// import PropTypes from 'prop-types';
import partyAnimation from '../lotties/party.json';
import Lottie from 'lottie-react';

const UserNavBar = () => {
  return (
    <nav className='user-nav-bar'>
      <img src={logo} className='logo' alt='logo' />

      <div className='user-animation'>
        <Lottie
          animationData={partyAnimation}
          style={{ width: '150px', height: '160px', marginLeft: '10px' }} // You forgot to mention the height
        />
      </div>
    </nav>
  );
};

// UserNavBar.propTypes = {
//   userId: PropTypes.string.isRequired,
// };

export default UserNavBar;
