import React, {Component} from 'react';
import NotesItem from './NotesItem';

export default class NotesList extends Component{
  formInput = e =>{
    e.preventDefault();
    const notes = e.target.textarea.value.trim();
    const {currentTime, timestamp, videoId} = this.props;
    // console.log(Boolean(timestamp[timestamp.length - 1]));//interesting
    if(!(timestamp[timestamp.length - 1] === undefined && notes === '')){
      //we allow the user to just log timestamp without notes.
      //But we don't let them to spam the function without making the first note
      this.props.onInputChange(notes, currentTime);
      //call db to save info
       //getting the timestamp for the record -- currentTime
      //text_body -- notes
      //video_id
      fetch('/addnotes',
      {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'}, //no idea why this work but fuck this
        body: `video_id=${videoId}&text=${notes}&timestamp=${currentTime}`
      })
      .then(res => res.json(res))
      .then(res => console.log('from db for notes',res))
      .catch(err => console.log(err));

      // console.log(currentTime, videoId, notes);
    }
    e.target.reset();
  }

  goto = time => {
    this.props.goto(time);
  }

  render(){
    const {noteList, timestamp} = this.props;
    const notesWithTimestamps = noteList.map((note, i)=>[note, timestamp[i]]);
    return (
      <div className='videoNotes'>
        <form className="notes-col" onSubmit={this.formInput}>
          <h3>Notebook</h3>
          <textarea name="notes" id="textarea" cols="50" rows="10" placeholder="Type your note here and click “save” to submit.A timestamp will be added to notes."></textarea>
          <button type="submit">Save</button>
        </form>
        <div className="leftNotes">
          {notesWithTimestamps.map((note, i)=> <NotesItem key={i} content={note[0]} timestamp={note[1]} goto={this.goto} />)}
        </div>
      </div>
    )
  }
}
