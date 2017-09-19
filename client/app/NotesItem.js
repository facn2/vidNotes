import React, {Component} from 'react';

export default class NotesItem extends Component{
  goto = e => {
    this.props.goto(this.props.timestamp);
  }

  render(){
    const formatTime = time => new Date(time * 1000).toISOString().substr(11, 8);
    return (
         <div className="eachNotes">
            <h4>{this.props.content}</h4>
            {this.props.timestamp !== undefined &&
            <p onClick={this.goto}>{formatTime(this.props.timestamp)}</p>}
             <button id="edit">Edit</button>
             <button id="delete">delete</button>
         </div>
    )
  }
}
