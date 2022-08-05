import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
   const activeStyle = {
      fontWeight: "bold",
      color: "red"
   }
   return (
      <nav>
         
         <NavLink to="/home">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink activeStyle={activeStyle} to="/friends">Friends</NavLink>
         <NavLink activeStyle={activeStyle} to="/about/culture">Culture</NavLink>
      </nav>
   );
};

export default Header;