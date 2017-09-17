import React, {Component} from 'react';

export default class Notes extends Component{
  render(){
    return (
      <div className='videoNotes'>
            <div className="notes-col">
              <h3>Notebook</h3>
              <textarea name="notes" id="textarea" cols="50" rows="10" placeholder="Type your note here and
press “enter” to submit..."></textarea>

<div className="leftNotes">
   <div className="eachNotes">
      <h4>here is some dummy notes</h4>
      <p>00:44</p>
       <button id="edit">Edit</button>
       <button id="delete">delete</button>
   </div>

   <div className="eachNotes">
      <h4>here is some dummy notes</h4>
      <p>00:44</p>
       <button id="edit">Edit</button>
       <button id="delete">delete</button>
   </div>

   <div className="eachNotes">
      <h4>here is some dummy notes</h4>
      <p>00:44</p>
       <button id="edit">Edit</button>
       <button id="delete">delete</button>
   </div>

</div>




              </div>

            </div>

    )
  }
}
