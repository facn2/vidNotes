import React, {Component} from 'react';

export default class Video extends Component{
  render(){
    return (
      <div className='youtubeVideo'>
            <iframe className='embed-responsive-item'
            id={this.props.videoId}
            src={`https://www.youtube.com/embed/${this.props.videoId}`}
            height="515"
            width="760"
            allowFullScreen></iframe>
          <h1>Title</h1>
          <h4>author</h4>
          <h4>Description</h4>
      </div>
    )
  }
}
