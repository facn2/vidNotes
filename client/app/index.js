import React from 'react';
import {render} from 'react-dom';
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

</div>);

render(mainComponents, document.getElementById('root'));
