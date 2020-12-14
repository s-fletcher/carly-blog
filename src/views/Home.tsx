import React from 'react';
import { Link } from 'react-router-dom';
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
          <p>A joyful college student who loves to experience everything the world has to offer.</p>
          <br />
          <p>You can learn more about me <Link to="/welcome-to-my-blog">here</Link>.</p>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
