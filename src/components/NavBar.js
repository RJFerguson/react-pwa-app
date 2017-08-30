import React from 'react'; 
import { Link } from 'react-router-dom';

const NavBar = (props) => (
  <div className="navbar">
    <Link to="/">Feed</Link>
    <Link to="/profile">Profile</Link>
  </div> 
)

export default NavBar 