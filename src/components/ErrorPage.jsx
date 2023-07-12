import React from 'react';
import '../styles/ErrorPage.css';
import GoHomeButton from './GoHomeButton';

const ErrorPage = () => {
  return (
    <div id='error-page'>
      <section className='error-page-container'>
        <h1>Oops!</h1>
        <h2>Error: 404</h2>
        <p>The link you followed may be broken or the page may have been removed.</p>
        <GoHomeButton />
      </section>
    </div>
  );
};

export default ErrorPage;
