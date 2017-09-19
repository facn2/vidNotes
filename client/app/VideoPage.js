import React, {Component} from 'react';
import YouTube from 'react-youtube';
import NotesList from './NotesList';

export default class VideoPage extends Component{
  constructor(){
    super();
    this.setIntervalID = [];
    this.state = {timestamp:[], notes:[], goto:0, currentTime:0}
  }

  componentDidMount(){
    //call to db
  }

  componentWillUnmount(){
      //fuck this
      this.setIntervalID.map(id => clearInterval(id));
      // reason: new listener is added everytime the video is stopped and Played again;
  }

  loopGetTime = e =>
    this.setIntervalID.push(setInterval(this.getCurrentTime.bind(null, e), 1000))


  getCurrentTime = e => {
    const currentTime = Math.floor(e.target.getCurrentTime());
    this.setState({currentTime});
  }

  inputChange = (input, time)=> {
    const notes = this.state.notes.concat(input);
    const timestamp = this.state.timestamp.concat(time);
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
        {/* {console.log(this.state)} */}
        {/* wasting shit load of memory beocz of the shitty module*/}

        <YouTube
          opts = {{
            height: '515',
            width: '760',
            playerVars:{
              start:this.state.goto,
              autoplay:1
            }
          }}
          onPlay={this.loopGetTime}
          videoId={this.props.match.params.videoId}/>
        <NotesList
          goto={this.goto}
          onInputChange={this.inputChange}
          noteList={this.state.notes}
          timestamp={this.state.timestamp}
          currentTime={this.state.currentTime}/>
      </div>
    )
  }
}
