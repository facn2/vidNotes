import React, {Component} from 'react';

export default class Notes extends Component{
  render(){
    return (
      <div className='components'>
            <div className="notes-col">
              <h3>Notes</h3>
              <textarea name="notes" id="textarea" cols="30" rows="10" placeholder="Wanna jot down anything?"></textarea>
              <p>here is some dummy notes
                <button id="edit">Edit</button>
                <button id="delete">delete</button>
              </p>
              <p>here is some dummy notes
                <button id="edit">Edit</button>
                <button id="delete">delete</button>
              </p>
              <p>here is some dummy notes
                <button id="edit">Edit</button>
                <button id="delete">delete</button>
              </p>
            </div>
      </div>
    )
  }
}
