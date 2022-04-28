import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import './Navigation.css'

const  Navigation = () => {
    const navLinkStyles = ({ isActive }) => {
      return {
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "none" : "underline",
        color: isActive ? "green" : "blue"
      };
    };
    return (
      <nav className="primary-nav">
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
        <NavLink style={navLinkStyles} className="navDetail" to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyles} className="navDetail"  to={{ pathname: "about", state: { fromNavigation: true}}}>
          About
        </NavLink>
      </nav>
    );
  };
export default Navigation;