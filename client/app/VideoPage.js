import React, {Component} from 'react';
import YouTube from 'react-youtube';
import NotesList from './NotesList';
import Video from './Video';

export default class VideoPage extends Component{
  constructor(){
    super();
    this.state = {timestamp:[], notes:[], goto:0}
  }

  componentDidMount(){
    //call to db
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

  goto = time => {
    this.setState(prevState=>
    prevState.goto === time?{goto:time + 0.0001}:{goto:time}
    );
  }

  render(){
    return (
      <div className="VideoPage">
        {console.log(this.state)}
        <YouTube
          opts = {{
            height: '515',
            width: '760',
            playerVars:{
              start:this.state.goto,
              autoplay:1
            }
          }}
          onPause={this.getTimestamp}
          videoId={this.props.match.params.videoId}/>
        <NotesList
          goto={this.goto}
          onInputChange={this.inputChange}
          noteList={this.state.notes}
          timestamp={this.state.timestamp}/>
      </div>
    )
  }
}
