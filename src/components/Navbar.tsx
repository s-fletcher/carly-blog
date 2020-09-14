import React from 'react';
import '../styles/navbar.scss';

/**
 * Navigation bar rendered on every page
 */
const Navbar: React.FC = () => (
  <div id="navbar">
    <div className="container">
      <a href="/" className="cursive">carly</a>
      <NavItems />
    </div>
  </div>
);

/**
 * Navigation items for top navbar and hamburger menu
 */
const NavItems: React.FC = () => (
  <ul id="nav-items">
    <a href="/"><li className="item">Home</li></a>
    <a href="/"><li className="item">Blog</li></a>
    <a href="/"><li className="item">Recipes</li></a>
  </ul>
);

export default Navbar;
