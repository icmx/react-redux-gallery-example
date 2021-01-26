import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';
import PhotoModalPage from './pages/PhotoModalPage';
import PhotoViewPage from './pages/PhotoViewPage';

const App = () => {
  return (
    <Router basename="/react-redux-gallery-example">
      <Pages />
    </Router>
  );
};

const Pages = () => {
  const location = useLocation();
  const backgroundLocation = location?.state?.background;

  return (
    <>
      <Switch location={backgroundLocation || location}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/albums/:id" component={AlbumPage} />
        <Route exact path="/photos/:id" component={PhotoViewPage} />
        <Redirect to="/" />
      </Switch>

      {backgroundLocation && (
        <Route path="/photos/:id" component={PhotoModalPage} />
      )}
    </>
  );
};

export default App;
