import React, {Component} from 'react';
import Card from './Card';
import AddSearchComponent from './AddSearchComponent';

class VideoGallery extends Component{
  render(){
    return (
      <div className="VideoGallery">
        <div>
          <AddSearchComponent />
        </div>
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default VideoGallery;
