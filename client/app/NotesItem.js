import React, {Component} from 'react';

export default class NotesItem extends Component{
  render(){
    return (
      <div className="eachNotes">
         <h4>{this.props.content}</h4>
         <p>{this.props.timestamp}</p>
          <button id="edit">Edit</button>
          <button id="delete">delete</button>
      </div>
    )
  }
}
