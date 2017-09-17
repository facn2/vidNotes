import React from 'react';


class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    const videoID = image.split('vi/')[1].split('/')[0];
    var style = {
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={videoID} className="card-header" />
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Watch Video
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="author">By: Paul Hanna</p>

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>

        <Button />
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <article className="card">
        {console.log('from card', this.props.pic.thumbnail)}
        <CardHeader image={this.props.pic.thumbnail}/>
        <CardBody title={'YouTube Title Here'} text={'Youtube description with a maximum number of characters goes here'}/>
      </article>
    )
  }
}

export default Card;
