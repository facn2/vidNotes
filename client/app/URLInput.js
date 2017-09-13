import React, {Component} from 'react';

export default class URLInput extends Component{
  render(){
    return (
      <form className="components">
        <label htmlFor="url">Youtube URL</label>
        <input type="text" id="url" placeholder="Please enter URL" />
        <button type="submit">Save</button>
        <button>Cancel</button>
      </form>
    )
  }
}
