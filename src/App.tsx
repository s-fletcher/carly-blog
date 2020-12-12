import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Blog from './views/Blog';
import Home from './views/Home';
import Recipes from './views/Recipes';

/**
 * App
 */
const App: React.FC = () => (
  <div id="app">
    <Router>
      <Navbar />

      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);
export default App;
