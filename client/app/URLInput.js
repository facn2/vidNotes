import React, {Component} from 'react';

class URLInput extends Component{
  submitForm = event =>{
    const videoID = this.url.value.split('=')[1];
    //need to check userinput
    event.preventDefault();
    fetch('/add',
    {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'}, //no idea why this work but fuck this
      body: `url=${videoID}`
    })
    .then(res => res.json(res))
    .then(res => {console.log('return from db');
    this.props.onInputChange({thumbnail: `https://img.youtube.com/vi/${videoID}/sddefault.jpg`})
  })
    .catch(err => console.log(err));

    this.form.reset();
  }

  render(){
    return (
      <form className="add-video-padding"
        ref={input=>this.form = input}
        onSubmit={this.submitForm}>
        <label htmlFor="url">Youtube URL</label>
        <input type="text" id="url"
          ref={input=>this.url = input}
          placeholder="Please enter URL" />
        <button type="submit" className="add-video-button">Save</button>
      </form>
    )
  }
}

export default URLInput;
