import React, {Component} from 'react';

class URLInput extends Component{
  submitForm = event =>{
    const videoID = this.url.value.split('=')[1].substr(0,11);
    //need to check userinput nvm that for now
    event.preventDefault();
    fetch('/add',
    {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'}, //no idea why this work but fuck this
      body: `url=${videoID}`
    })
    .then(res => res.json(res))
    .then(res =>
    this.props.onInputChange({thumbnail: `https://img.youtube.com/vi/${videoID}/sddefault.jpg`})
    )
    .catch(err => console.log(err));

    this.form.reset();
  }

  render(){
    return (
      <form className="add-video-padding"
        ref={input=>this.form = input}
        onSubmit={this.submitForm}>
        <input className="search-bar" type="text" id="url"
          ref={input=>this.url = input}
          placeholder="  Copy Paste YouTube URL here" />
       <button type="submit" className="add-video-button">Import Video</button>
      </form>
    )
  }
}

export default URLInput;
