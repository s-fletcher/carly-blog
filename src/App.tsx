import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Blog from './views/Blog';
import BlogPost from './views/BlogPost';
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
        <Route exact path="/:blogPost">
          <BlogPost />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <Socials />
    </Router>
  </div>
);
export default App;
