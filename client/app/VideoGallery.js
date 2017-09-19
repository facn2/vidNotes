import React, {Component} from 'react';
import Card from './Card';
import URLInput from './URLInput';

class VideoGallery extends Component{
  constructor(){
    super();
    this.state = {thumbnails:[]};
  }
  componentDidMount(){
    //ajax call to get data from db
    fetch('/getGallery')
    .then(res => res.json())
    .then(res => {console.log(res);this.setState({thumbnails: res})})
    .catch(err => console.log(err));
  }

  updateOnInput = input => {
    const currentState = this.state.thumbnails;
    const newState = currentState.concat(input);
    console.log('newstate', newState);
    this.setState({thumbnails: newState});
  }
  //make one cb to input to update state
  render(){
    return (
      <div className="VideoGallery">
        <div>
          <URLInput onInputChange={this.updateOnInput}/>
        </div>
        {console.log('render state', this.state.thumbnails)}
        {
          this.state.thumbnails.map((pic, i) => <Card key={i} pic={pic} />)
        }
      </div>
    )
  }
}

export default VideoGallery;
