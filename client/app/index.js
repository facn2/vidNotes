import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

const hi = (<div>
  <h1>Hi world</h1>
  <AwesomeComponent />
</div>);

render(hi, document.getElementById('root'));
