import React from 'react';

class NavbarComponent extends React.Component{

   render() {
      return (
         <div>
            <header>
            	<div id="header-inner">
            		<nav>
            			<h2>Vid Notes</h2>
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
