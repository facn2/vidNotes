import React from 'react';
import {render} from 'react-dom';
import URLInput from './URLInput';
import Video from './Video';
import Notes from './Notes';

const combine = (<div className="components">
  <URLInput />
  <Video />
  <Notes />
</div>)

render(combine, document.getElementById('root'));
