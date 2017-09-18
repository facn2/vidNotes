import React, {Component} from 'react';
import NotesItem from './NotesItem';

export default class NotesList extends Component{
  formInput = e =>{
    e.preventDefault();
    const notes = e.target.textarea.value
    const timestamp = this.props.timestamp;
    this.props.onInputChange(notes, timestamp);
    //call db to save info
    const inputTimestamp = timestamp[timestamp.length - 1]; //getting the timestamp for the record
    e.target.reset();
  }

  render(){
    return (
      <div className='videoNotes'>
        <form className="notes-col" onSubmit={this.formInput}>
          <h3>Notebook</h3>
          <textarea name="notes" id="textarea" cols="50" rows="10" placeholder={`Type your note here and click “save” to submit.\nPausing video will add a timestamp to notes.`}></textarea>
          <button type="submit">Save</button>
        </form>
        <div className="leftNotes">
          {this.props.noteList.map((note, i)=> <NotesItem key={i} content={note} timestamp={this.props.timestamp} />)}
        </div>
      </div>
    )
  }
}
