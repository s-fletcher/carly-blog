import React from 'react';
import '../styles/home.scss';

/**
 * Home
 */
const Home: React.FC = () => (
  <div id="home">
    <div className="container">
      <div className="content">
        <div className="image-border">
          <img alt="carly" src={require('../assets/carly.png')} />
        </div>
        <div className="about">
          <h1 className="cursive">Carly Burwell</h1>
          {/* eslint-disable-next-line max-len */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
