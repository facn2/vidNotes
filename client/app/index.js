import React from 'react';
import {render} from 'react-dom';
import URLInput from './URLInput';
import VideoPage from './VideoPage';
import VideoGallery from './VideoGallery';
import NavbarComponent from './NavbarComponent';
import {Switch, Route, BrowserRouter} from 'react-router-dom';//fuck this shit

const Main = (
  <BrowserRouter>
    <div>
      <NavbarComponent />
      <Switch>
        <Route exact path='/' component={VideoGallery}/>
        <Route path="/video/:videoId" component={VideoPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

render(Main, document.getElementById('root'));
