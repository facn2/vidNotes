import React from 'react';
import {Link} from 'react-router-dom';

class NavbarComponent extends React.Component{

   render() {
      return (
         <div>
            <header>
            	<div id="header-inner">
            		<nav>
                  <Link to="/"><h2>Vid Notes</h2></Link>
            			<ul>
            				<li><a href="#">Register</a></li>
            				<li><a href="#">Login</a></li>
            			</ul>
            		</nav>
            	</div>
            </header>
         </div>
      )
   }
}

export default NavbarComponent;
