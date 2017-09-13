import React from 'react';
import {render} from 'react-dom';
import URLInput from './URLInput';
import Video from './Video';
import Notes from './Notes';
import NavbarComponent from './NavbarComponent.jsx';
import Card from './Card.jsx';
import AddSearchComponent from './AddSearchComponent.jsx';

const mainComponents = (<div>
  <NavbarComponent />
  <AddSearchComponent />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />

  <Video />
  <Notes />
  <URLInput />
</div>);

render(mainComponents, document.getElementById('root'));
