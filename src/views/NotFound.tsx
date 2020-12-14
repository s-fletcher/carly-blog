import React from 'react';
import '../styles/not-found.scss';

/**
 * Recipes
 */
const NotFound: React.FC = () => (
  <div id="not-found">
    <div className="container">
      <div className="content">
        <p>Looks like you found a non-existent page... congrats!</p>
      </div>
    </div>
  </div>
);
export default NotFound;
