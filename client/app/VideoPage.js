import React, {Component} from 'react';
import Notes from './Notes';
import Video from './Video';

export default class VideoPage extends Component{
  render(){
    return (
      <div className="VideoPage">
        <Video />
        <Notes />
      </div>
    )
  }
}
