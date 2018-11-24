import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {

    render() {

      return (
        <div className="header">
          <h1>My Restaurant</h1>
          <h4>
            <Link to="/">Home</Link> || 
            <Link to="/users">Users</Link> || 
            <Link to="/about">About</Link> ||   
            <Link to="/contact">Contact Us</Link> 
          </h4>
        </div>

      )
  
    }
  
  }

  export default Header