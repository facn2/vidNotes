import React, {Component} from 'react';
import NotesItem from './NotesItem';

export default class NotesList extends Component{
  formInput = e =>{
    e.preventDefault();
    const notes = e.target.textarea.value
    const timestamp = this.props.timestamp;
    if(!(timestamp[timestamp.length - 1] === undefined && notes === '')){
      this.props.onInputChange(notes, timestamp);
      //call db to save info
      const inputTimestamp = timestamp[timestamp.length - 1]; //getting the timestamp for the record
    }
    e.target.reset();
  }

  goto = time => {
    this.props.goto(time);
  }

  render(){
    const {noteList, timestamp} = this.props;
    const notesWithTimestamps = noteList.map((note, i)=>[note, timestamp[i]]);
    const filterList = notesWithTimestamps.filter(note => note[0] !== null && note);
    return (
      <div className='videoNotes'>
        <form className="notes-col" onSubmit={this.formInput}>
          <h3>Notebook</h3>
          <textarea name="notes" id="textarea" cols="50" rows="10" placeholder={`Type your note here and click “save” to submit.\nPausing video will add a timestamp to notes.`}></textarea>
          <button type="submit">Save</button>
        </form>
        <div className="leftNotes">
          {filterList.map((note, i)=> <NotesItem key={i} content={note[0]} timestamp={note[1]} goto={this.goto} />)}
        </div>
      </div>
    )
  }
}
