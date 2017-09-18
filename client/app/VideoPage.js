import React, {Component} from 'react';
import YouTube from 'react-youtube';
import NotesList from './NotesList';
import Video from './Video';

export default class VideoPage extends Component{
  constructor(){
    super();
    this.state = {timestamp:[], notes:[]}
  }

  componentDidMount(){

  }

  getTimestamp = e => {
    const timestamp = this.state.timestamp.concat(Math.floor(e.target.getCurrentTime()));
    const notes = this.state.notes.concat(null);
    this.setState({timestamp, notes});
  }

  inputChange = (input, prevTimestamp) => {
    const notes = this.state.notes.concat(input);
    const timestamp = prevTimestamp.concat(prevTimestamp[prevTimestamp.length - 1]);
    this.setState({timestamp, notes});
  }

  render(){
    return (
      <div className="VideoPage">
        {console.log(this.state)}
        <YouTube
          opts = {{
            height: '515',
            width: '760',
            // playerVars:{
            //   start:this.state.timestamp
            // }
          }}
          onPause={this.getTimestamp}
          videoId={this.props.match.params.videoId}/>
        <NotesList
          onInputChange={this.inputChange}
          noteList={this.state.notes}
          timestamp={this.state.timestamp}/>
      </div>
    )
  }
}
