import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
          <nav class="navbar">
         <ul>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About</Link></li>
        <li><Link to="/">Gallery</Link></li>
        <li><Link to="/Countries">Countries</Link></li>
        <li><Link to="/Country">Country</Link></li>

         </ul>
          </nav>
        </div>
    );
}

export default Navbar;