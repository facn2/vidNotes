import React, {Component} from 'react';

export default class Video extends Component{
  render(){
    return (
      <div className='components'>
            <iframe className='embed-responsive-item' src="https://www.youtube.com/embed/Pw0IZg7_4mo"
            height="315"
            width="560"
            allowFullScreen></iframe>
          <h1>Title</h1>
          <h4>author</h4>
          <h4>Description</h4>
      </div>
    )
  }
}
