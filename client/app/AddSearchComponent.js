import React from 'react';
import {Link} from 'react-router-dom';

class SearchComponent extends React.Component {
   render() {
      return (
        <form className = "search-container">
          <input type="text" id="search-bar"
                  placeholder="What can I help you with today?"/>
                  <a href = "#" >
                  <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
                  </a>
          </form>
      )
   }
}

class AddSearchComponent extends React.Component {
   render() {
      return (
         <div className="add-video-padding">
            <Link to="/add" className="add-video-button">+ Add Video</Link>
               <SearchComponent />
         </div>
      )
   }
}

export default AddSearchComponent;
