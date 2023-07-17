import React from 'react';
import '../styles/ErrorPage.css';
import GoHomeButton from '../components/GoHomeButton';
import TopNavBar from '../components/TopNavBar';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <div className='error-page-header'>
        <TopNavBar />
      </div>
      <section className='error-page-content'>
        <h1>Oops!</h1>
        <h2>Error: 404</h2>
        <p>The link you followed may be broken or the page may have been removed.</p>
        <GoHomeButton />
      </section>
    </div>
  );
};

export default ErrorPage;
