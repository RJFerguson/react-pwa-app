import React from 'react'; 
import NavBar from './NavBar.js'


const Template = ({title}) => (
  <div>
    <NavBar />
    <p className="page-info">
      This is the {title} page.
    </p>
  </div> 
)

export default Template 