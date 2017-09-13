import React, {Component} from 'react';

export default class Notes extends Component{
  render(){
    return (
      <div className='components'>
            <div className="notes-col">
              <h3>Notes</h3>
              <textarea name="notes" id="textarea" cols="30" rows="10" placeholder="Wanna jot down anything?"></textarea>
              <h4>here is some dummy notes
                <button id="edit">Edit</button>
                <button id="delete">delete</button>
              </h4>
              <h4>here is some dummy notes
                <button id="edit">Edit</button>
                <button id="delete">delete</button>
              </h4>
              <h4>here is some dummy notes
                <button id="edit">Edit</button>
                <button id="delete">delete</button>
              </h4>
            </div>
      </div>
    )
  }
}
